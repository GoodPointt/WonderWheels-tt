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

const CarsGridItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

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
            <LikeBtn
              hadleLike={() => hadleLike(car)}
              isFavorite={car.isFavorite}
            />
            <StyledCarsGridItemImg src={car.img} loading="lazy" />
            <div>
              <p>
                {car.make}
                <span>{car.model}</span>,
              </p>
              <p>{car.rentalPrice}</p>
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
