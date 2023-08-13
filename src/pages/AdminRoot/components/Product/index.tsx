import { FC, MutableRefObject, useRef, useState } from 'react';
import { EditButton, Container, ProductActionsContainer, ProductDescription, ProductFigure, ProductImage, ProductInfo, ProductName } from './styles';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { ProductProps } from '../../../../@types/product';

export const Product: FC<ProductProps> = ({ name, description, image }) => {
	const [isWiderThanTall, setIsWiderThanTall] = useState(false);
	const productImageRef = useRef() as MutableRefObject<HTMLImageElement>;

	const imageOnLoad = () => {
		const imageWidth = productImageRef.current.clientWidth;
		const imageHeight = productImageRef.current.clientHeight;

		if (imageWidth > imageHeight) {
			setIsWiderThanTall(true);
		}
	};

	return (
		<Container>
			<ProductFigure>
				<ProductImage
					ref={productImageRef}
					src={image.url}
					isWiderThanTall={isWiderThanTall}
					onLoad={imageOnLoad}
				/>
			</ProductFigure>
			<ProductInfo>
				<ProductName>{name}</ProductName>
				<ProductDescription>{description}</ProductDescription>
			</ProductInfo>
			<ProductActionsContainer>
				<EditButton>
					<FiEdit />
				</EditButton>
				<EditButton>
					<RiDeleteBin2Line />
				</EditButton>
			</ProductActionsContainer>
		</Container>
	);
};
