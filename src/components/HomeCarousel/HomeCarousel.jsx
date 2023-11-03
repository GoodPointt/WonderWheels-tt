import { imgs } from '../../common/data';
import Slider from '../Slider/Slider';
import { useTranslation } from 'react-i18next';

const HomeCarousel = () => {
  const { t } = useTranslation();

  const slideTitles = t('home.homeSlider', {
    returnObjects: true,
  });

  return (
    <section>
      <Slider data={imgs} titles={slideTitles} />
    </section>
  );
};

export default HomeCarousel;
