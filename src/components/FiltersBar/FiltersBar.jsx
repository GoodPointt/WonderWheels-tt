import { useRef } from 'react';
import { StyledFiltersWrapper } from './FiltersBar.styled';
import MileageFilter from './MileageFilter/MileageFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import MakesFilter from './MakesFilter/MakesFilter';
import PropTypes from 'prop-types';

const FiltersBar = ({ variant }) => {
  const priceFilterInputRef = useRef();
  const makeFilterInputRef = useRef();
  const mileageMinFilterInputRef = useRef();
  const mileageMaxFilterInputRef = useRef();

  const onClear = name => {
    switch (name) {
      case 'prices':
        makeFilterInputRef.current.clearValue();
        mileageMinFilterInputRef.current.clearValue();
        mileageMaxFilterInputRef.current.clearValue();
        break;
      case 'makes':
        priceFilterInputRef.current.clearValue();
        mileageMinFilterInputRef.current.clearValue();
        mileageMaxFilterInputRef.current.clearValue();
        break;
      case 'mileageAsc':
        priceFilterInputRef.current.clearValue();
        makeFilterInputRef.current.clearValue();
        break;
      case 'mileageDesc':
        priceFilterInputRef.current.clearValue();
        makeFilterInputRef.current.clearValue();
        break;

      default:
        break;
    }
  };

  return (
    <StyledFiltersWrapper>
      <MakesFilter
        variant={variant}
        reference={makeFilterInputRef}
        onClear={onClear}
      />
      <PriceFilter
        variant={variant}
        reference={priceFilterInputRef}
        onClear={onClear}
      />
      <MileageFilter
        variant={variant}
        referenceMin={mileageMinFilterInputRef}
        referenceMax={mileageMaxFilterInputRef}
        onClear={onClear}
      />
    </StyledFiltersWrapper>
  );
};

export default FiltersBar;

FiltersBar.propTypes = {
  variant: PropTypes.string.isRequired,
};
