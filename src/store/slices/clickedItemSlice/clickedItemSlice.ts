import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeClickedItem } from '../../../interfaces/TypeClickedItem';

// used in WindowDialog

export interface IUserState {
	clickedItem: TypeClickedItem;
}

export const initialState: IUserState = {
	clickedItem: undefined,
};

export const clickedItemSlice = createSlice({
	name: 'clickedItem',
	initialState,
	reducers: {
		setIsOneClicked: (state, action: PayloadAction<TypeClickedItem>) => {
			state.clickedItem = action.payload;
		},
	},
});

export default clickedItemSlice.reducer;

export const { setIsOneClicked } = clickedItemSlice.actions;
