import { FC, MutableRefObject, useRef, useState } from 'react';
import { Container, ProductImage, ProductName, Shadow } from './styles';
import { ProductProps } from '../../@types/product';
import { useDispatch } from 'react-redux';
import { changeProductInfoModal } from '../../store/productInfoModal';

export const HomeSectionFigure: FC<ProductProps> = (product) => {
	const [isWiderThanTall, setIsWiderThanTall] = useState(false);

	const dispatch = useDispatch();
	const productImageRef = useRef() as MutableRefObject<HTMLImageElement>;

	const showModal = (p: ProductProps) => {
		dispatch(changeProductInfoModal(p));
	};

	const imageOnLoad = () => {
		const imageWidth = productImageRef.current.clientWidth;
		const imageHeight = productImageRef.current.clientHeight;

		if (imageWidth > imageHeight) {
			setIsWiderThanTall(true);
		}
	};

	return (
		<Container onClick={() => showModal(product)}>
			<ProductImage onLoad={imageOnLoad} isWiderThanTall={isWiderThanTall} ref={productImageRef} src={product.image.url} />
			<Shadow>
				<ProductName>{product.name}</ProductName>
			</Shadow>
		</Container>
	);
};
