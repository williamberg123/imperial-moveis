export interface ProductProps {
	id: string;
	name: string;
	description: string;
	image: {
		url: string;
	}
}

export interface ProductInfoModalProps extends ProductProps {
	isOpen: boolean;
}
