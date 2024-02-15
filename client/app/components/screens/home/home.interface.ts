import { IGalleryItem } from '@/components/UI/gallery/gallery.interface'
import { ISlide } from '@/components/UI/slider/slider.interface'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
