import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Attachment } from '../../../interfaces';

export interface IUserState {
	attachment: Attachment | undefined;
}

export const initialState: IUserState = {
	attachment: undefined,
};

export const imageSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		setIsOneClicked: (
			state,
			action: PayloadAction<Attachment | undefined>
		) => {
			state.attachment = action.payload;
		},
	},
});

export default imageSlice.reducer;

export const { setIsOneClicked } = imageSlice.actions;
