import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Authorization as Auto, Registration as Reg } from '../pages';
import { Main } from '../pages/Main/Main';

export const AppRouter: FC = () => {
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
