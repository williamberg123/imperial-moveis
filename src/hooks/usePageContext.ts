import { useContext } from 'react';
import { AdminPageContext, AdminPageContextType } from '../contexts/AdminPageProvider';

export const usePageContext = () => {
	const context = useContext(AdminPageContext) as AdminPageContextType;
	return context;
};
