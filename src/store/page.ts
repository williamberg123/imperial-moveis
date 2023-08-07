import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageOptions } from '../components/NavBar';

const pageSlice = createSlice({
	name: 'page',
	initialState: '',
	reducers: {
		changePage: (state, action: PayloadAction<PageOptions>) => {
			state = state;
			return action.payload;
		},
	},
});

export const pageReducer = pageSlice.reducer;

export const { changePage } = pageSlice.actions;
