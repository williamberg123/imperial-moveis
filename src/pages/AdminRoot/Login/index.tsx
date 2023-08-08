import { FC } from 'react';
import { RiAdminFill } from 'react-icons/ri';

import { Form } from '../../../components/Form';
import { FormInput, FormLabel, FormSubmitButton, FormTitle } from '../../../components/Form/styles';
import { AdminPageContent, AdminPageSubtitle, AdminPageTitle, Container } from './styles';

export const AdminLogin: FC = () => {
	return (
		<Container>
			<AdminPageContent>
				<AdminPageTitle>
					Faça Login como administrador
					<RiAdminFill />
				</AdminPageTitle>
				<AdminPageSubtitle>Adicione, edite e remova informações quando quiser</AdminPageSubtitle>
			</AdminPageContent>

			<Form onSubmitFunc={(e) => {e.preventDefault()}}>
				<FormTitle>Admin</FormTitle>

				<FormLabel>
					Email
					<FormInput type="text" placeholder="digite algo" />
				</FormLabel>

				<FormLabel>
					Senha
					<FormInput type="password" placeholder="digite algo" />
				</FormLabel>

				<FormSubmitButton as="button" type="submit">Entrar</FormSubmitButton>
			</Form>
		</Container>
	);
};
