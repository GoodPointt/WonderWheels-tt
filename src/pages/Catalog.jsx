import CarsGrid from '../components/CarsGrid/CarsGrid';
import { StyledContainer } from '../components/Container/Container.styled';
import LoadMore from '../components/LoadMore/LoadMore';

const Catalog = () => {
  return (
    <section>
      <StyledContainer>
        <CarsGrid />
        <LoadMore />
      </StyledContainer>
    </section>
  );
};

export default Catalog;
