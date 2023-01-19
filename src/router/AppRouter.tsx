import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Authorization as Auto, Registration } from '../pages';
import { Main } from '../pages/Main/Main';

export const AppRouter: FC = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true);

	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={isLogin ? <Main /> : <Auto />} />
				<Route path="*" element={isLogin ? <Main /> : <Auto />} />
				<Route path="im" element={isLogin ? <Main /> : <Auto />} />
				<Route path="im/:id" element={isLogin ? <Main /> : <Auto />} />
				<Route path="login" element={isLogin ? <Main /> : <Auto />} />
				<Route path="registration" element={<Registration />} />
			</Route>
		</Routes>
	);
};
