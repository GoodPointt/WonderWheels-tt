import { useTranslation } from 'react-i18next';
import { StyledContainer } from '../Container/Container.styled';
import { StyledBenefits } from './AboutUs.styled';
import AnimateOnScroll from '../Animate/AnimateOnScroll';

const AboutUs = () => {
  const { t } = useTranslation();

  const benefits = t('home.benefits', {
    returnObjects: true,
  });

  return (
    <section className="section">
      <StyledBenefits>
        <AnimateOnScroll>
          <StyledContainer>
            <h2>Drive Your Dreams!</h2>
            <ul>
              {benefits.length > 0 &&
                benefits.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </StyledContainer>
        </AnimateOnScroll>
      </StyledBenefits>
    </section>
  );
};

export default AboutUs;
