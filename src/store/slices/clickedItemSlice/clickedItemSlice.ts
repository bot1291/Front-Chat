import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Attachment } from '../../../interfaces';
import { ISetting } from '../../../interfaces/ISetting';

type TypeClickedItem = Attachment | ISetting | undefined;

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
