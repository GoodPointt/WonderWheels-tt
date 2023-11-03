import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { StyledBanner } from './Banner.styled';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <StyledBanner>
        <video autoPlay loop muted preload="auto" width="100%">
          <source
            src="https://res.cloudinary.com/cloud7ty/video/upload/v1698994868/promo_a5e06b0e7b.mp4"
            type="video/mp4"
          />
        </video>
        <Link
          to={`/catalog?locale=${i18n.language}`}
          className="buttonContainer"
        >
          <Button>{t('button.rentLable')}</Button>
        </Link>
      </StyledBanner>
    </section>
  );
};

export default Banner;
