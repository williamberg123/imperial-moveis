import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BiBrain } from 'react-icons/bi';
import { useQuery } from '@apollo/client';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { HomeSectionProps } from '../../@types/home-section';
import { HomeSectionSkeleton } from '../../components/HomeSectionSkeleton';
import { HomeSection } from '../../components/HomeSection';
import { changePage } from '../../store/page';
import imperialLogoOriginal from '../../assets/imperial-logo-original.jpeg';

import { ContactLink, Container, EnterpriseInfo, EnterpriseInfoContainer, ProfileImage, Section, TitleSection } from './styles';
import { GET_SECTIONS_QUERY } from '../../services/apollo/querys';

export const Home: FC = () => {
	const { data, loading } = useQuery(GET_SECTIONS_QUERY);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changePage('home'));
		document.title = 'Imperial Móveis'
	}, []);

	return (
		<Container>
			{loading && Array(3).fill('').map(({ }, index) => <HomeSectionSkeleton key={`home-skeleton-${index}`} />)}

			{
				!!data
					? (
						<>
							{
								data?.homeSections.map((section: HomeSectionProps, index: number) => (
									<HomeSection key={`home-section-${index}`} {...section} />
								))
							}
							<Section>
								<TitleSection>
									O melhor você só encontra aqui!
									<BiBrain />
								</TitleSection>
								<EnterpriseInfoContainer>
									<ProfileImage src={imperialLogoOriginal} />

									<EnterpriseInfo>
										<ContactLink target="_blank" href="https://www.instagram.com/wi_diogo/">
											@imperial_moveis_marco
											<FaInstagram />
										</ContactLink>

										<ContactLink target="_blank" href="https://api.whatsapp.com/send?phone=5588996784261&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20or%C3%A7amento!">
											(88) 99678-4261
											<FaWhatsapp />
										</ContactLink>
									</EnterpriseInfo>
								</EnterpriseInfoContainer>
							</Section>
						</>
					)
					: null
			}
		</Container>
	);
};
