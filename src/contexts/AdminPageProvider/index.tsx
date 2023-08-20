import { User } from 'firebase/auth';
import { ReactNode, createContext, useMemo, useState } from 'react';

export const AdminPageContext = createContext({});

interface AdminPageProviderProps {
	children: ReactNode;
}

type AdminPageLoadingOptions = 'home' | 'products';

export interface AdminPageContextType {
	adminPageLoadingOption: AdminPageLoadingOptions;
	changeAdminPageLoadingOption: (option: AdminPageLoadingOptions) => void;
	admin: User | null;
	changeAdmin: (a: User) => void;
	isOpenNewProductModal: boolean;
	toggleNewProductModal: () => void;
}

export const AdminPageProvider = ({ children }: AdminPageProviderProps) => {
	const [adminPageLoadingOption, setAdminPageLoadingOption] = useState<AdminPageLoadingOptions>('home');
	const [admin, setAdmin] = useState<User | null>(null);
	const [isOpenNewProductModal, setIsOpenNewProductModal] = useState(false);

	const changeAdminPageLoadingOption = (option: AdminPageLoadingOptions) => {
		setAdminPageLoadingOption(option);
	};

	const changeAdmin = (adminData: User) => {
		setAdmin(adminData);
	};

	const toggleNewProductModal = () => {
		setIsOpenNewProductModal((s) => !s);
	};

	const context = useMemo<AdminPageContextType>(() => (
		{
			adminPageLoadingOption, changeAdminPageLoadingOption, admin, changeAdmin, isOpenNewProductModal,
			toggleNewProductModal
		}
	),
		[adminPageLoadingOption, changeAdminPageLoadingOption, admin, changeAdmin, isOpenNewProductModal, toggleNewProductModal]
	);

	return (
		<AdminPageContext.Provider value={context}>
			{children}
		</AdminPageContext.Provider>
	);
};
