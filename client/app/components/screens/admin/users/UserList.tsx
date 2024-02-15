import { FC } from 'react'

import AdminNavigation from '@/UI/admin-navigation/AdminNavigation'
import AdminHeader from '@/UI/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/UI/admin-table/AdminTable/AdminTable'
import Heading from '@/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['E-mail', 'Registration date']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default UserList
