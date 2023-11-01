import { useTranslation } from 'react-i18next';
import Button from '../../Button/Button';
import {
  StyledCarsGridItem,
  StyledCarsGridItemImg,
} from './CarsGridItem.styled';
import LikeBtn from './LikeBtn';
import { handleFavorite } from '../../../redux/adverts/slice';
import { useDispatch } from 'react-redux/es';

const CarsGridItem = ({ car }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const hadleLike = id => {
    dispatch(handleFavorite(id));
  };

  return (
    <StyledCarsGridItem>
      <LikeBtn
        hadleLike={() => hadleLike(car.id)}
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
      <Button>{t('button.lable')}</Button>
    </StyledCarsGridItem>
  );
};

export default CarsGridItem;
