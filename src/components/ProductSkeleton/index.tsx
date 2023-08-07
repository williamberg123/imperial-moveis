import { FC } from 'react';
import { Container, ProductImageSkeleton, ProductNameSkeleton } from './styles';

export interface ProductSkeletonProps {
	delay: string;
}

export const ProductSkeleton: FC<ProductSkeletonProps> = ({ delay }) => {
	return (
		<Container delay={delay}>
			<ProductNameSkeleton />
			<ProductImageSkeleton />
		</Container>
	);
};
