import { useTranslation } from 'react-i18next';
import { StyledLoadMore } from './LoadMore.styled';
import { useDispatch } from 'react-redux/es';
import { getAll, getByMake } from '../../redux/adverts/operations';
import { useAdverts } from '../../hooks/useAdverts';
import { incrementPage } from '../../redux/adverts/slice';
import { useEffect, useState } from 'react';
import { LIMIT } from '../../common/constants';
import { handleInfo } from '../../utils/handleToast';

const LoadMore = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState(true);
  const [shouldScroll, setShouldScroll] = useState(false);
  const { t } = useTranslation();
  const { page, adverts, filter } = useAdverts();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page > 2 && shouldScroll) {
      const scrollAmount = 400;
      const currentScrollPosition = window.scrollY;
      const newScrollPosition = currentScrollPosition + scrollAmount;

      window.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth',
      });
    }
  }, [page, shouldScroll]);

  useEffect(() => {
    if (adverts.length % LIMIT !== 0) {
      setShouldLoadMore(false);
    } else {
      setShouldLoadMore(true);
    }
  }, [adverts]);

  const toggleShouldScroll = () => setShouldScroll(prev => !prev);

  const handleLoadMore = async () => {
    toggleShouldScroll();
    try {
      !filter.make && (await dispatch(getAll()).unwrap());
      filter.make && (await dispatch(getByMake(filter.make)).unwrap());
      await dispatch(incrementPage()).unwrap();
    } catch (e) {
      handleInfo(e);
    } finally {
      toggleShouldScroll();
    }
  };

  return (
    shouldLoadMore && (
      <StyledLoadMore onClick={handleLoadMore}>
        {t('button.loadMore')}
      </StyledLoadMore>
    )
  );
};

export default LoadMore;
