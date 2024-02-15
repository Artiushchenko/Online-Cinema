import { FC } from 'react'

import AdminNavigation from '@/UI/admin-navigation/AdminNavigation'
import AdminHeader from '@/UI/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/UI/admin-table/AdminTable/AdminTable'
import Heading from '@/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		createAsync,
		deleteAsync,
	} = useMovies()

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genres', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MovieList
