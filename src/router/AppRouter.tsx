import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Authorization, Registration } from '../pages';
import { Main } from '../pages/Main/Main';

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Main />} />
				<Route path="/*" element={'t'} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/registration" element={<Registration />} />
			</Route>
		</Routes>
	);
};
