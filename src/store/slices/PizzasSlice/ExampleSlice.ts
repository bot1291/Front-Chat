import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
	test: string;
}

export const initialState: IUserState = {
	test: 'test',
};

export const exampleSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		test: (state, action: PayloadAction<string>) => {
			state.test = action.payload;
		},
	},
});

export default exampleSlice.reducer;

export const { test } = exampleSlice.actions;
