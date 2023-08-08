import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { changePage } from '../../store/page';
import { ProductProps } from '../../@types/product';
import { ProductSkeleton } from '../../components/ProductSkeleton';
import { Product } from '../../components/Product';

import { Container, PageTitle, ProductsContainer } from './styles';
import { GET_PRODUCTS_QUERY } from '../../services/apollo/querys';

export const Catalog: FC = () => {
	const { data, loading } = useQuery(GET_PRODUCTS_QUERY);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changePage('catalog'));
		document.title = 'Catálogo'
	}, []);

	return (

		<Container>
			<PageTitle>Catálogo de produtos</PageTitle>
			<ProductsContainer>
				{
					true && Array(7).fill('').map(({}, index) => <ProductSkeleton key={`product-skeleton-${index}`} delay={`${0.1 * index}s`} />)
				}

				{/* {
					!loading &&
					data?.products.map((p: ProductProps, index: number) => <Product key={`product-${index}`} delay={index * 0.1} {...p} />)
				} */}
			</ProductsContainer>
		</Container>
	);
};
