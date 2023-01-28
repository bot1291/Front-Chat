import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { MainLayout } from '../layouts/MainLayout';
import { Authorization as Auto, Registration as Reg } from '../pages';
import { Main } from '../pages/Main/Main';
import { fetchUser } from '../store/slices/CurrentUserSlice/ActionCreators';

export const AppRouter: FC = () => {
	const { theme } = useAppSelector((state) => state.themeReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.theme = theme;
		dispatch(fetchUser());
	}, [dispatch, theme]);

	const [isLogin] = useState<boolean>(true);

	const checkForLogin = (elem: JSX.Element) => (isLogin ? <Main /> : elem);

	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={checkForLogin(<Auto />)} />
				<Route path="*" element={checkForLogin(<Auto />)} />
				<Route path="im" element={checkForLogin(<Auto />)} />
				<Route path="im/:id" element={checkForLogin(<Auto />)} />
				<Route path="login" element={checkForLogin(<Auto />)} />
				<Route path="reg" element={checkForLogin(<Reg />)} />
				<Route path="logBackup" element={<Auto />} />
				<Route path="regBackup" element={<Reg />} />
			</Route>
		</Routes>
	);
};
