import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AdminRoot: FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};
