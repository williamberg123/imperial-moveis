import { FC } from 'react';

import imperialLogo from '../../assets/imperial-logo.png';
import { LogoContainer, LogoImage } from './styles';

export const Logo: FC = () => {
	return (
		<LogoContainer>
			<LogoImage src={imperialLogo} />
		</LogoContainer>
	);
};
