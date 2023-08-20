import { FC, useEffect } from 'react';
import { Container } from './styles';
import { Product } from '../Product';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_QUERY } from '../../../../services/apollo/querys';
import { ProductProps } from '../../../../@types/product';
import { NewProduct } from '../NewProduct';

export const Products: FC = () => {
	const { data, refetch } = useQuery(GET_PRODUCTS_QUERY);

	useEffect(() => {
		refetch();
	}, []);

	return (
		<Container>
			<NewProduct />
			{
				data?.products.map((p: ProductProps, index: number) => <Product key={`product-${index}`} {...p} />)
			}
		</Container>
	);
};
