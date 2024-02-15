import ActorEdit from '@/screens/admin/actors/edit/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage
