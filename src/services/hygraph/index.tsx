import axios from 'axios';

interface UploadProductImageProps {
	file: File;
}

export const uploadProductImage = async ({ file }: UploadProductImageProps) => {
	try {
		const form = new FormData();
		form.append('fileUpload', file);

		const response = await axios.post(`${import.meta.env.VITE_GRAPHCMS_PROJECT_URL}/upload`, form, {
			headers: {
				authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_ASSET_TOKEN}`
			}
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
