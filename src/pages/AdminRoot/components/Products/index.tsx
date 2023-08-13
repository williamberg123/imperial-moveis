import { FC } from 'react';
import { Container } from './styles';
import { Product } from '../Product';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_QUERY } from '../../../../services/apollo/querys';
import { ProductProps } from '../../../../@types/product';

export const Products: FC = () => {
	const { data } = useQuery(GET_PRODUCTS_QUERY);
	console.log(data);

	return (
		<Container>
			{
				data?.products.map((p: ProductProps) => <Product {...p} />)
			}
		</Container>
	);
};
