import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link
				className={cn({
					[styles.active]: asPath === link,
				})}
				href={link}
			>
				{title}
			</Link>
		</li>
	)
}

export default AdminNavItem
