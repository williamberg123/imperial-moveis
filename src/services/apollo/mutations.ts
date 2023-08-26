import { gql } from '@apollo/client';

export const CREATE_PRODUCT_MUTATION = gql`
	mutation CreateProduct($id: ID, $name: String, $description: String) {
		createProduct(data: { id: $id, name: $name, description: $description}) {
			id
			name
			description
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
