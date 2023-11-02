import React, { useEffect, useState } from 'react';
import { fetchAllCars } from '../../api/instance';
import { StyledCarsGrid } from './CarsGrid.styled';
import CarsGridItem from './CarsGridItem/CarsGridItem';
import { getAll } from '../../redux/adverts/operations';
import { useAdverts } from '../../hooks/useAdverts';
import { useDispatch } from 'react-redux/es';
import { incrementPage } from '../../redux/adverts/slice';

const CarsGrid = () => {
  const dispatch = useDispatch();
  const { adverts } = useAdverts();

  useEffect(() => {
    (async () => {
      dispatch(getAll());
      dispatch(incrementPage());
    })();
  }, []);

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
