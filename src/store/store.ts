import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/TestSlice/TestSlice';
import registrReducer from './slices/RegistrSlice/RegistrSlice';
import themeReducer from './slices/ThemeSlice/ThemeSlice';
import imageReducer from './slices/ImageSlice/ImageSlice';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: {
			registrReducer,
			testReducer,
			themeReducer,
			imageReducer,
		},
		preloadedState: initialState,
	});
};

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
