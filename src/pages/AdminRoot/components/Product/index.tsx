import { FC, MutableRefObject, useRef, useState } from 'react';
import { EditButton, Container, ProductActionsContainer, ProductDescription, ProductFigure, ProductImage, ProductInfo, ProductName, DeleteButton } from './styles';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { ProductProps } from '../../../../@types/product';
import { DELETE_PRODUCT_MUTATION } from '../../../../services/apollo/mutations';
import { useMutation } from '@apollo/client';
import { GET_PRODUCTS_QUERY } from '../../../../services/apollo/querys';

export const Product: FC<ProductProps> = ({ id, name, description, image }) => {
	const [isWiderThanTall, setIsWiderThanTall] = useState(false);
	const [deleteProduct, {}] = useMutation(DELETE_PRODUCT_MUTATION, {
		refetchQueries: [
			GET_PRODUCTS_QUERY,
		]
	});

	const productImageRef = useRef() as MutableRefObject<HTMLImageElement>;

	const imageOnLoad = () => {
		const imageWidth = productImageRef.current.clientWidth;
		const imageHeight = productImageRef.current.clientHeight;

		if (imageWidth > imageHeight) {
			setIsWiderThanTall(true);
		}
	};

	const deleteOneProduct = async () => {
		await deleteProduct({variables: {
			id: id,
		}})
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

				<DeleteButton onClick={deleteOneProduct}>
					<RiDeleteBin2Line />
				</DeleteButton>
			</ProductActionsContainer>
		</Container>
	);
};
