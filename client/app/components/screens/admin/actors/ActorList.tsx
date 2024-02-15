import { FC } from 'react'

import AdminNavigation from '@/UI/admin-navigation/AdminNavigation'
import AdminHeader from '@/UI/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/UI/admin-table/AdminTable/AdminTable'
import Heading from '@/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useActors } from './useActors'

const ActorList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		createAsync,
		deleteAsync,
	} = useActors()

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count movies']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default ActorList
