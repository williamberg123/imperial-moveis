import { FC, useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import { Form } from '../../../components/Form';
import { toLogUser } from '../../../services/firebase/login';
import { usePageContext } from '../../../hooks/usePageContext';
import { FormInput, FormLabel, FormSubmitButton, FormTitle } from '../../../components/Form/styles';
import { AdminPageContent, AdminPageSubtitle, AdminPageTitle, Container } from './styles';
import { User } from 'firebase/auth';

export const AdminLogin: FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { handleSubmit, register } = useForm();
	const { changeAdmin } = usePageContext();
	const navigate = useNavigate();

	const onSubmit = async (data: FieldValues) => {
		try {
			setIsLoading(true)
			const { email, password } = data;

			const isAdmin: User | null | undefined = await toLogUser(email, password);

			if (isAdmin) {
				changeAdmin(isAdmin);
				navigate('/admin');
			} else {
				console.log('Usuário ou senha incorretos');
			}
		} catch (error) {

		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<AdminPageContent>
				<AdminPageTitle>
					Faça Login como administrador
					<RiAdminFill />
				</AdminPageTitle>
				<AdminPageSubtitle>Adicione, edite e remova informações quando quiser</AdminPageSubtitle>
			</AdminPageContent>

			<Form onSubmitFunc={handleSubmit(onSubmit)}>
				<FormTitle>Admin</FormTitle>

				<FormLabel>
					Email
					<FormInput {...register('email', { required: true })} type="text" placeholder="digite seu email" />
				</FormLabel>

				<FormLabel>
					Senha
					<FormInput {...register('password', { required: true })} type="password" placeholder="digite sua senha" />
				</FormLabel>

				<FormSubmitButton as="button" type="submit">
					{
						!isLoading
						? 'Entrar'
						: <InfinitySpin color="white" />
					}
				</FormSubmitButton>
			</Form>
		</Container>
	);
};
