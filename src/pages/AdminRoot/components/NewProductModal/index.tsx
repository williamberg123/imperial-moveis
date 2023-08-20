import { CloseModal, Container } from './styles';
import { FormInput, FormLabel, FormSubmitButton } from '../../../../components/Form/styles';
import { Form } from '../../../../components/Form';
import { BiSolidCamera } from 'react-icons/bi';
import { ChangeEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { CgCloseO } from 'react-icons/cg';
import { useAdminContext } from '../../../../hooks/useAdminContext';

export const NewProductModal = () => {
	const [image, setImage] = useState<File | null>(null);
	const { handleSubmit, register } = useForm();
	const { toggleNewProductModal } = useAdminContext();

	const onChoose = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		if (e.target.files?.length) {
			setImage(e.target.files[0]);
		}
	};

	const onSubmit = (data: FieldValues) => {
		data = {
			...data,
			image: data.image[0],
		}
		console.log(data);
	};

	return (
		<Container>
			<Form onSubmitFunc={handleSubmit(onSubmit)}>
				<FormLabel>
					Nome do produto
					<FormInput {...register('name', { required: true })} placeholder="nome do produto" />
				</FormLabel>

				<FormLabel>
					Descrição
					<FormInput {...register('description', { required: true })} placeholder="descrição do produto" />
				</FormLabel>

				<FormLabel htmlFor="product-image">
					Imagem do produto
					<FormLabel>
						<BiSolidCamera />
						{
							image
								? '1 arquivo selecionado'
								: 'Selecionar'
						}

						<FormInput
							id="product-image"
							type="file"
							size={50}
							{...register('image', { onChange: onChoose })}
							accept="image/png, image/gif, image/jpeg"
						/>
					</FormLabel>
				</FormLabel>

				<FormSubmitButton type="submit" as="button">Criar novo produto</FormSubmitButton>
			</Form>

			<CloseModal onClick={toggleNewProductModal}>
				<CgCloseO />
			</CloseModal>
		</Container>
	);
};
