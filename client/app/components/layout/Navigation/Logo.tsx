import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
	return (
		<Link
			href="/"
			className="px-layout mb-10 block text-3xl text-center text-white uppercase font-bold"
		>
			<span className="text-primary">Online</span> Cinema
		</Link>
	)
}

export default Logo
