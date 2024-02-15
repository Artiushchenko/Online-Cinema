import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import { useFavorites } from '../../favorites/useFavorites'

import styles from './FavoriteButton.module.scss'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmeshed, setIsSmeshed] = useState(false)
	const { favoriteMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) {
			return
		}

		const isHasMovie = favoriteMovies.some((f) => f._id === movieId)

		if (isSmeshed !== isHasMovie) {
			setIsSmeshed(isHasMovie)
		}
	}, [favoriteMovies, isSmeshed, movieId])

	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleFavorite(movieId),
		{
			onError: (error) => {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsSmeshed(!isSmeshed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmeshed,
			})}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		/>
	)
}

export default FavoriteButton
