import { gql } from '@apollo/client';

export const GET_SECTIONS_QUERY = gql`
	query GetSections {
		homeSections {
			id
			title
			products {
				name
				id
				description
				image {
					url
				}
			}
		}
	}
`;

export const GET_PRODUCTS_QUERY = gql`
	query GetProducts {
		products {
			id
			name
			description
			image {
				url
			}
		}
	}
`;
