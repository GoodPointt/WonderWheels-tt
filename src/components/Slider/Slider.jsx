import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './Slider.css';
import PropTypes from 'prop-types';

const Slider = ({ data, titles }) => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation]}
      loop
      className="HomeSlider"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      centeredSlides={true}
      effect={'fade'}
    >
      {data.length > 0 &&
        data.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slideContent"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${img})`,
              }}
            >
              <h2 className="slideTitle">{titles[idx].title}</h2>
              <h3 className="slidePreTitle">{titles[idx].preTitle}</h3>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;

Slider.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      preTitle: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
