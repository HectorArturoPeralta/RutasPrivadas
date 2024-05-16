import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	P1,
	P2,
	P3,
	P4,
	P5,
	P6,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
      			<Route path="/" element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
					<Route path="p4" element={<PrivateRoute><P4 /></PrivateRoute>} />
					<Route path="p5" element={<PrivateRoute><P5 /></PrivateRoute>} />
					<Route path="p6" element={<PrivateRoute><P6 /></PrivateRoute>} />
					<Route path="p1" element={<P1 />} />
					<Route path="p2" element={<P2 />} />
					<Route path="p3" element={<P3 />} />
				</Route>
			</Routes>
		</>
	);
};