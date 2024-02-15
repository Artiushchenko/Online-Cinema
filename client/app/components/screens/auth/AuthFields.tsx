import { FC } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/UI/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'E-mail is required field!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid e-mail address.',
					},
				})}
				placeholder="E-mail"
				error={errors.email as FieldError}
			/>

			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required field!',
								minLength: {
									value: 6,
									message: 'Minimal length should more 6 symbols.',
								},
							}
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password as FieldError}
			/>
		</>
	)
}

export default AuthFields
