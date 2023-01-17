import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
	'get pizzas',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(
				'https://reactpizzas.ru:5000/api/pizzas'
			);

			return response;
		} catch (error) {
			if (error instanceof Error) {
				return thunkAPI.rejectWithValue(error);
			}
			return;
		}
	}
);
