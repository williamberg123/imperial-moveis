import { FC } from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import { Button, Buttons, Container, Image, NewProductDescription, NewProductInfo, NewProductName } from './styles';
import { useAdminContext } from '../../../../hooks/useAdminContext';

export const NewProduct: FC = () => {
	const { toggleNewProductModal } = useAdminContext();

	return (
		<Container onClick={toggleNewProductModal}>
			<Image>
				<HiPlusCircle />
				New
			</Image>

			<NewProductInfo>
				<NewProductName>Nome</NewProductName>
				<NewProductDescription>Descrição</NewProductDescription>

				<Buttons>
					<Button />
					<Button />
				</Buttons>
			</NewProductInfo>
		</Container>
	);
};
