import { FC } from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { ProductInfoModal } from '../components/ProductInfoModal';
import { useSelector } from 'react-redux';
import { ReduxStateType } from '../@types/redux';

export const Root: FC = () => {
	const { isOpen } = useSelector((state: ReduxStateType) => state.productInfoModal);

	return (
		<>
			<Header />
			<Outlet />

			{
				!!isOpen && (
					<ProductInfoModal />
				)
			}
		</>
	);
};
