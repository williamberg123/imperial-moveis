import { FC } from 'react';
import { Container, ImageContainerSkeleton, ImageSkeleton, TitleSkeleton } from './styles';

export const HomeSectionSkeleton: FC = () => {
	return (
		<Container>
			<TitleSkeleton />

			<ImageContainerSkeleton>
				<ImageSkeleton delay="0s" />
				<ImageSkeleton delay="0.1s" />
				<ImageSkeleton delay="0.2s" />
			</ImageContainerSkeleton>
		</Container>
	);
};
