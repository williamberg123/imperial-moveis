import { gql } from '@apollo/client';

export const CREATE_PRODUCT_MUTATION = gql`
	mutation DeleteProduct($id: ID) {
		createProduct(data: {}) {
			id
			name
		}
	}
`;

export const DELETE_PRODUCT_MUTATION = gql`
	mutation DeleteProduct($id: ID) {
		deleteProduct(where: { id: $id }) {
			id
			name
		}
	}
`;
