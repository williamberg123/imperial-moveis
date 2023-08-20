import { FC, ReactNode } from 'react';
import { FormContainer } from './styles';

interface FormProps {
	children: ReactNode;
	onSubmitFunc: () => void;
	bgColor?: string;
}

export const Form: FC<FormProps> = ({ onSubmitFunc, children, bgColor }) => {
	return (
		<FormContainer onSubmit={onSubmitFunc} bgColor={bgColor}>
			{children}
		</FormContainer>
	)
};
