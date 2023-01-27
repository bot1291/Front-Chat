import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeTheme } from '../../../interfaces/TypeTheme';
import { getTheme } from '../../../utils/helpers/getTheme';

export interface IUserState {
	theme: TypeTheme;
}

export const initialState: IUserState = {
	theme: getTheme(),
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<TypeTheme>) => {
			state.theme = action.payload;
		},
	},
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
