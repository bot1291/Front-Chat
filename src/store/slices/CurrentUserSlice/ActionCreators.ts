import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from './api';

export const fetchUser = createAsyncThunk('get user', async (_, thunkAPI) => {
	try {
		const response = await getUser();

		return response;
	} catch (error) {
		if (error instanceof Error) {
			return thunkAPI.rejectWithValue(error);
		}
		return;
	}
});
