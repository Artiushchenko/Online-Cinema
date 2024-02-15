import { FC } from 'react'

import AdminNavigation from '@/UI/admin-navigation/AdminNavigation'
import Heading from '@/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Statistics" />
			<Statistics />
		</Meta>
	)
}

export default Admin
