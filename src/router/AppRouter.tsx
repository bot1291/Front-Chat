import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages';
import { MainLayout } from '../layouts/MainLayout';

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={'Test'} />
				<Route path="/*" element={<NotFound />} />
				<Route path="/example" element={'Example'} />
			</Route>
		</Routes>
	);
};
