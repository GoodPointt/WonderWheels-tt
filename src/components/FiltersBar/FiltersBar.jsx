import { StyledFiltersWrapper } from './FiltersBar.styled';
import ValuesFilter from './MakesFilter/MakesFilter';
import MileageFilter from './MileageFilter/MileageFilter';
import PriceFilter from './PriceFilter/PriceFilter';

const FiltersBar = ({ variant }) => {
  return (
    <StyledFiltersWrapper>
      <ValuesFilter variant={variant} />
      <PriceFilter variant={variant} />
      <MileageFilter variant={variant} />
    </StyledFiltersWrapper>
  );
};

export default FiltersBar;
