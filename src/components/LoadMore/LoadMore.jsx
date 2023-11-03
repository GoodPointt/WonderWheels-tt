import { useTranslation } from 'react-i18next';
import { StyledLoadMore } from './LoadMore.styled';
import { useDispatch } from 'react-redux/es';
import { getAll, getByMake } from '../../redux/adverts/operations';
import { useAdverts } from '../../hooks/useAdverts';
import { incrementPage } from '../../redux/adverts/slice';
import { useEffect, useState } from 'react';
import { LIMIT, VARIANT } from '../../common/constants';
import { handleInfo } from '../../utils/handleToast';

const LoadMore = ({ variant }) => {
  const [shouldLoadMore, setShouldLoadMore] = useState(true);
  const [shouldScroll, setShouldScroll] = useState(false);
  const { t } = useTranslation();
  const { page, adverts, filter, favorites } = useAdverts();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page > 1 && shouldScroll) {
      const scrollAmount = 725;
      const currentScrollPosition = window.scrollY;
      const newScrollPosition = currentScrollPosition + scrollAmount;

      window.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adverts.length]);

  useEffect(() => {
    if (adverts.length % LIMIT !== 0) {
      setShouldLoadMore(false);
    } else {
      setShouldLoadMore(true);
    }
  }, [adverts]);

  const toggleShouldScroll = () => setShouldScroll(prev => !prev);

  const handleLoadMore = async () => {
    dispatch(incrementPage());
    toggleShouldScroll();
    try {
      !filter.make && (await dispatch(getAll(variant)).unwrap());
      filter.make && (await dispatch(getByMake(filter.make)).unwrap());
    } catch (e) {
      handleInfo(e);
    } finally {
      toggleShouldScroll();
    }
  };

  if (
    window.location.pathname.includes(VARIANT.ALL) &&
    adverts?.length >= Number(LIMIT)
  )
    return (
      shouldLoadMore && (
        <StyledLoadMore onClick={handleLoadMore}>
          {t('button.loadMore')}
        </StyledLoadMore>
      )
    );
  if (
    window.location.pathname.includes(VARIANT.FAV) &&
    favorites?.length === LIMIT
  )
    return (
      shouldLoadMore && (
        <StyledLoadMore onClick={handleLoadMore}>
          {t('button.loadMore')}
        </StyledLoadMore>
      )
    );
};

export default LoadMore;
