import { FC } from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import { Container, Span } from './styles';
import { useAdminContext } from '../../../../hooks/useAdminContext';

export const NewProduct: FC = () => {
	const { toggleNewProductModal } = useAdminContext();

	return (
		<Container onClick={toggleNewProductModal}>
			<Span>
				<HiPlusCircle />
				New
			</Span>
		</Container>
	);
};
