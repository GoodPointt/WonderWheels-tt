import { StyledFiltersWrapper } from './FiltersBar.styled';
import ValuesFilter from './MakesFilter/MakesFilter';
import MileageFilter from './MileageFilter/MileageFilter';
import PriceFilter from './PriceFilter/PriceFilter';

const FiltersBar = () => {
  return (
    <StyledFiltersWrapper>
      <ValuesFilter />
      <PriceFilter />
      <MileageFilter />
    </StyledFiltersWrapper>
  );
};

export default FiltersBar;
