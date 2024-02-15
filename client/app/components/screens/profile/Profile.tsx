import { FC } from 'react'
import { useForm } from 'react-hook-form'

import SkeletonLoader from '@/components/UI/SkeletonLoader'
import Heading from '@/components/UI/heading/Heading'

import Button from '@/UI/form-elements/Button'

import Meta from '@/utils/meta/Meta'

import AuthFields from '../auth/AuthFields'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title="Profile">
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields formState={formState} register={register} />
				)}
				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
