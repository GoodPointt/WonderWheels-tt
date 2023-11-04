import React, { useEffect, useState } from 'react';
import { StyledCarsGrid } from './CarsGrid.styled';
import CarsGridItem from './CarsGridItem/CarsGridItem';
import { getAll } from '../../redux/adverts/operations';
import { useAdverts } from '../../hooks/useAdverts';
import { useDispatch } from 'react-redux/es';
import { VARIANT } from '../../common/constants';
import { handleError, handleInfo } from '../../utils/handleToast';

const CarsGrid = ({ variant }) => {
  const dispatch = useDispatch();
  const { adverts, favorites, error } = useAdverts();

  console.log('carsGridADVERTS', adverts);
  console.log('carsGridERROR', error);

  useEffect(() => {
    (async () => {
      dispatch(getAll(variant));
    })();
  }, []);

  if (error || adverts.length === 0)
    return (
      <h2 style={{ color: 'navy', textAlign: 'center', marginTop: 100 }}>
        {error}
      </h2>
    );
  if (variant === VARIANT.FAV && favorites.length === 0)
    return (
      <h2 style={{ color: 'navy', textAlign: 'center', marginTop: 100 }}>
        Your favorite list is empty...
      </h2>
    );

  return (
    <StyledCarsGrid>
      {adverts.length > 0 &&
        adverts.map(advert => {
          return <CarsGridItem key={advert.id} car={advert} />;
        })}
    </StyledCarsGrid>
  );
};

export default CarsGrid;
