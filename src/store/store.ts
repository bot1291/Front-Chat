import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/TestSlice/TestSlice';
import registrReducer from './slices/RegistrSlice/RegistrSlice';
import themeReducer from './slices/ThemeSlice/ThemeSlice';
import clickedItemReducer from './slices/clickedItemSlice/clickedItemSlice';
import currentUserReducer from './slices/CurrentUserSlice/CurrentUserSlice';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: {
			registrReducer,
			testReducer,
			themeReducer,
			clickedItemReducer,
			currentUserReducer,
		},
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
	});
};

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
