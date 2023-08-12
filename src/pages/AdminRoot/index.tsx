import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminPageProvider } from '../../contexts/AdminPageProvider';

export const AdminRoot: FC = () => {
	return (
		<AdminPageProvider>
			<Outlet />
		</AdminPageProvider>
	);
};
