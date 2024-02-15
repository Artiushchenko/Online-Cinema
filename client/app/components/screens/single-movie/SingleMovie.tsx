import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/UI/banner/Banner'
import Gallery from '@/UI/gallery/Gallery'
import SubHeading from '@/UI/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import Content from './Content/Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(() => import('@/UI/video-player/VideoPlayer'), {
	ssr: false,
})

const DynamicRateMovie = dynamic(
	() => import('@/screens/single-movie/RateMovie/RateMovie'),
	{
		ssr: false,
	}
)

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	if (!movie) {
		return null
	}

	useUpdateCountOpened(movie.slug)

	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />

			<div className="mt-12">
				<SubHeading title="Similar movies" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie slug={movie.slug} id={movie._id} />
		</Meta>
	)
}

export default SingleMovie
