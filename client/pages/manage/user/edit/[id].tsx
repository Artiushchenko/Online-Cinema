import UserEdit from '@/screens/admin/users/edit/UserEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
