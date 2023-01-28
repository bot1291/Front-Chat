import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
	isOneClicked: number;
}

export const initialState: IUserState = {
	isOneClicked: 0,
};

export const imageSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		setIsOneClicked: (state, action: PayloadAction<number>) => {
			state.isOneClicked = action.payload;
		},
	},
});

export default imageSlice.reducer;

export const { setIsOneClicked } = imageSlice.actions;
