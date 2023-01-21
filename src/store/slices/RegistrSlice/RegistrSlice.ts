import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
	isSubmited: boolean;
}

export const initialState: IUserState = {
	isSubmited: false,
};

export const RegistrSlice = createSlice({
	name: 'registr',
	initialState,
	reducers: {
		setIsSubmited: (state) => {
			state.isSubmited = true;
		},
	},
});

export default RegistrSlice.reducer;

export const { setIsSubmited } = RegistrSlice.actions;
