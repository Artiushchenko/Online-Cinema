import axios, { axiosClassic } from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actors/edit/actor-edit.interface'

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm,
					}
				: {},
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getActorsUrl(``))
	},

	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}
