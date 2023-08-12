import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: ReactNode;
	isAuth: boolean;
	pathToRedirect: string;
}

export const PrivateRoute = ({ children, isAuth, pathToRedirect }: PrivateRouteProps) => {
	return isAuth ? children : <Navigate to={pathToRedirect} />
};
