import { FC } from 'react';
import { Container, ProductImageContainer, TitleSection } from './styles';
import { LuSofa } from 'react-icons/lu';

import { HomeSectionProps } from '../../@types/home-section';
import { HomeSectionFigure } from '../HomeSectionFigure';

export const HomeSection: FC<HomeSectionProps> = ({ title, products }) => {
	return (
		<Container>
			<TitleSection>
				{title}
				<LuSofa />
			</TitleSection>

			<ProductImageContainer>
				{
					...products.map((product, index) => <HomeSectionFigure key={`section-figure-${index}`} {...product} />)
				}
			</ProductImageContainer>
		</Container>
	);
};
