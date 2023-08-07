import { PageOptions } from '../components/NavBar';
import { ProductInfoModalProps } from './product';

export interface ReduxStateType {
	page: PageOptions;
	productInfoModal: ProductInfoModalProps;
}
