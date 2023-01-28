import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDialog } from '../../../interfaces/IDialog';
import { IUser } from '../../../interfaces/IUser';
import { fetchUser } from './ActionCreators';

export interface IUserState {
	user: IUser | Record<string, never>;
	currentDialog: IDialog | Record<string, never>;
	isLoading: boolean;
	isError: boolean;
}

export const initialState: IUserState = {
	currentDialog: {},
	user: {},
	isLoading: false,
	isError: false,
};

export const currentUserSlice = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setCurrentDialog: (
			state,
			action: PayloadAction<IDialog | Record<string, never>>
		) => {
			state.currentDialog = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;

			if (action.payload) state.user = action.payload;
		});

		builder.addCase(fetchUser.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(fetchUser.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default currentUserSlice.reducer;

export const { setCurrentDialog } = currentUserSlice.actions;
