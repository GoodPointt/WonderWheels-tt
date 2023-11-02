import CarsGrid from '../components/CarsGrid/CarsGrid';
import { StyledContainer } from '../components/Container/Container.styled';
import FiltersBar from '../components/FiltersBar/FiltersBar';
import LoadMore from '../components/LoadMore/LoadMore';
import SkeletonList from '../components/Skeleton/SkeletonList';
import { useAdverts } from '../hooks/useAdverts';

const Catalog = () => {
  const { isLoading } = useAdverts();
  return (
    <section>
      <StyledContainer>
        <FiltersBar />
        {isLoading && <SkeletonList />}
        <CarsGrid />
        <LoadMore />
      </StyledContainer>
    </section>
  );
};

export default Catalog;
