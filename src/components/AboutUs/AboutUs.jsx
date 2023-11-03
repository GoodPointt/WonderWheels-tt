import { useTranslation } from 'react-i18next';
import { StyledContainer } from '../Container/Container.styled';
import { StyledBenefitsSection } from './AboutUs.styled';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  // const lang = i18n.language;

  const benefits = t('home.benefits', {
    returnObjects: true,
  });

  return (
    <StyledBenefitsSection>
      <StyledContainer>
        <h2>Drive Your Dreams!</h2>
        <ul>
          {benefits.length > 0 &&
            benefits.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </StyledContainer>
    </StyledBenefitsSection>
  );
};

export default AboutUs;
