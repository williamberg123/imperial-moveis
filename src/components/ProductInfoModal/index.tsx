import { FC, MutableRefObject, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiCloseCircleFill } from 'react-icons/ri'

import { ReduxStateType } from '../../@types/redux';
import { changeProductInfoModal, initialState } from '../../store/productInfoModal';

import { CloseModal, Container, Modal, ProductDescription, ProductFigure, ProductImage, ProductInfoContainer, ProductName } from './styles';

export const ProductInfoModal: FC = () => {
	const [isWiderThanTall, setIsWiderThanTall] = useState(false);
	const { name, image, description } = useSelector((state: ReduxStateType) => state.productInfoModal);

	const dispatch = useDispatch();
	const productImageRef = useRef() as MutableRefObject<HTMLImageElement>;

	const closeModal = () => {
		dispatch(changeProductInfoModal(initialState));
	};

	const imageOnLoad = () => {
		const imageWidth = productImageRef.current.clientWidth;
		const imageHeight = productImageRef.current.clientHeight;

		if (imageWidth > imageHeight) {
			setIsWiderThanTall(true);
		}
	};

	return (
		<Container>
			<Modal>
				<ProductFigure>
					<ProductImage ref={productImageRef} isWiderThanTall={isWiderThanTall} onLoad={imageOnLoad} src={image.url} />
				</ProductFigure>

				<ProductInfoContainer>
					<ProductName title={name}>{name}</ProductName>
					<ProductDescription>{description}</ProductDescription>
				</ProductInfoContainer>
			</Modal>

			<CloseModal onClick={closeModal}>
				<RiCloseCircleFill />
			</CloseModal>
		</Container>
	);
};
