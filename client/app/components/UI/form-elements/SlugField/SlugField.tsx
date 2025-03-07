import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '../Field'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ register, generate, error }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Slug is required field!',
				})}
				placeholder="Slug"
				error={error}
			/>

			<div className={styles.badge} onClick={generate}>
				Generate
			</div>
		</div>
	)
}

export default SlugField
