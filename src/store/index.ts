import { configureStore } from "@reduxjs/toolkit";
import { pageReducer } from "./page";
import { productInfoModalReducer } from "./productInfoModal";

export const store = configureStore({
	reducer: {
		page: pageReducer,
		productInfoModal: productInfoModalReducer,
	},
});
