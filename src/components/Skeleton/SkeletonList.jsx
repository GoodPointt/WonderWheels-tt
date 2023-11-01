import { StyledCarsGrid } from '../CarsGrid/CarsGrid.styled';
import { StyledContainer } from '../Container/Container.styled';
import SkeletonItem from './SkeletonItem';

const SkeletonList = () => {
  return (
    <StyledContainer>
      <StyledCarsGrid>
        {[...Array(12).keys()].map(idx => (
          <SkeletonItem key={idx} />
        ))}
      </StyledCarsGrid>
    </StyledContainer>
  );
};

export default SkeletonList;
