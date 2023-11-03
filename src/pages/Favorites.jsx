import { VARIANT } from '../common/constants';
import CarsGrid from '../components/CarsGrid/CarsGrid';
import { StyledContainer } from '../components/Container/Container.styled';
import FiltersBar from '../components/FiltersBar/FiltersBar';
import LoadMore from '../components/LoadMore/LoadMore';
import SkeletonList from '../components/Skeleton/SkeletonList';
import { useAdverts } from '../hooks/useAdverts';

const Favorites = () => {
  const { isLoading } = useAdverts();
  return (
    <section>
      <StyledContainer>
        <FiltersBar variant={VARIANT.FAV} />
        {isLoading && <SkeletonList />}
        <CarsGrid variant={VARIANT.FAV} />
        <LoadMore variant={VARIANT.FAV} />
      </StyledContainer>
    </section>
  );
};

export default Favorites;
