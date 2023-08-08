import { FC, ReactNode } from 'react';
import { FormContainer } from './styles';

interface FormProps {
	children: ReactNode;
	onSubmitFunc: () => void;
}

export const Form: FC<FormProps> = ({ onSubmitFunc, children }) => {
	return (
		<FormContainer onSubmit={onSubmitFunc}>
			{children}
		</FormContainer>
	)
};
