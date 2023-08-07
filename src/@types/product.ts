export interface ProductProps {
	name: string;
	description: string;
	image: {
		url: string;
	}
}

export interface ProductInfoModalProps extends ProductProps {
	isOpen: boolean;
}
