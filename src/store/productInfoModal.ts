import { createSlice } from '@reduxjs/toolkit';
import { ProductInfoModalProps } from '../@types/product';

export const initialState: ProductInfoModalProps = {
	id: '',
	isOpen: false,
	name: '',
	image: {
		url: ''
	},
	description: '',
}

const productInfoModalSlice = createSlice({
	name: 'product_info_modal',
	initialState,
	reducers: {
		changeProductInfoModal: (state: ProductInfoModalProps, action) => {
			state = state;
			return {
				isOpen: true,
				...action.payload,
			};
		},
	}
});

export const productInfoModalReducer = productInfoModalSlice.reducer;

export const { changeProductInfoModal } = productInfoModalSlice.actions;
