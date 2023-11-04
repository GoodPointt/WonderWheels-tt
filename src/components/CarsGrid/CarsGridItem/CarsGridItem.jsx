import { useTranslation } from 'react-i18next';
import Button from '../../Button/Button';
import {
  StyledCarsGridItem,
  StyledCarsGridItemImg,
} from './CarsGridItem.styled';
import LikeBtn from './LikeBtn';
import { handleFavorite } from '../../../redux/adverts/slice';
import { useDispatch } from 'react-redux/es';
import { handleInfo, handleSuccess } from '../../../utils/handleToast';
import AnimateOnView from '../../Animate/AnimateOnView';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import CarDetails from '../CarDetails/CarDetails';
import PropTypes from 'prop-types';

const CarsGridItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const address = car.address.split(', ');

  const formatedMileage =
    car.mileage.toString().slice(0, 1) + ',' + car.mileage.toString().slice(1);

  const hadleLike = car => {
    dispatch(handleFavorite(car));

    if (!car.isFavorite) {
      handleSuccess(
        `${car.make} ${car.model} ${car.year} was added to favorites`
      );
    } else
      handleInfo(
        `${car.make} ${car.model} ${car.year} was removed from your favorites`
      );
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  if (window.location.pathname.includes('favorites') && !car.isFavorite)
    return null;
  else
    return (
      <>
        <AnimateOnView>
          <StyledCarsGridItem>
            <div className="upperBlock">
              <LikeBtn
                hadleLike={() => hadleLike(car)}
                isFavorite={car.isFavorite}
              />
              <StyledCarsGridItemImg src={car.img} loading="lazy" />
              <div className="carCardTitle">
                <p>
                  {car.make}
                  <span className="accentText">{car.model}</span>, {car.year}
                </p>
                <p>${car.rentalPrice}</p>
              </div>
              <div className="carDetailsWrapper">
                <span className="carDetails">{address[1]}</span>
                <span className="carDetails">{address[2]}</span>
                <span className="carDetails">{car.rentalCompany}</span>
                <span className="carDetails">{car.type}</span>
                <span className="carDetails">{car.model}</span>
                <span className="carDetails">{formatedMileage}</span>
              </div>
            </div>
            <Button handleClick={toggleModal}>{t('button.lable')}</Button>
          </StyledCarsGridItem>
        </AnimateOnView>
        <AnimatePresence>
          {showModal && (
            <Modal toggleModal={toggleModal} showModal={showModal}>
              <CarDetails car={car} />
            </Modal>
          )}
        </AnimatePresence>
      </>
    );
};

export default CarsGridItem;

CarsGridItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    rentalPrice: PropTypes.number.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
