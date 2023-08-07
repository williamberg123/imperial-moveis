import { FC, MutableRefObject, useRef, useState } from 'react';
import { Container, Figure, ProductImage, ProductName } from './styles';
import { ProductProps } from '../../@types/product';
import { useDispatch } from 'react-redux';
import { changeProductInfoModal } from '../../store/productInfoModal';

interface ExtendedProductProps extends ProductProps {
	delay: number;
}

export const Product: FC<ExtendedProductProps> = (product) => {
	const [isWiderThanTall, setIsWiderThanTall] = useState(false);

	const dispatch = useDispatch();
	const productImageRef = useRef() as MutableRefObject<HTMLImageElement>;
	const { name, image, delay} = product;

	const onClick = () => {
		dispatch(changeProductInfoModal(product));
	};

	const imageOnLoad = () => {
		const imageWidth = productImageRef.current.clientWidth;
		const imageHeight = productImageRef.current.clientHeight;

		if (imageWidth > imageHeight) {
			setIsWiderThanTall(true);
		}
	};

	return (
		<Container onClick={onClick} delay={delay}>
			<ProductName title={name}>
				{
				name.length > 31
				? `${name.slice(0, 31)}...`
				: name
				}
			</ProductName>
			<Figure>
				<ProductImage isWiderThanTall={isWiderThanTall} onLoad={imageOnLoad} ref={productImageRef} src={image.url} />
			</Figure>
		</Container>
	);
};
