import { useTranslation } from 'react-i18next';
import { StyledLoadMore } from './LoadMore.styled';
import { useDispatch } from 'react-redux/es';
import { getAll } from '../../redux/adverts/operations';
import { useAdverts } from '../../hooks/useAdverts';
import { incrementPage } from '../../redux/adverts/slice';
import { useEffect, useState } from 'react';
import { LIMIT } from '../../common/constants';

const LoadMore = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState(true);
  const { t } = useTranslation();
  const { page, adverts } = useAdverts();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page > 2) {
      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollPosition = scrollHeight - clientHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }

    if (adverts.length % LIMIT !== 0) setShouldLoadMore(false);
  }, [adverts.length, page]);

  return (
    shouldLoadMore && (
      <StyledLoadMore
        onClick={() => {
          dispatch(getAll(page));
          dispatch(incrementPage());
        }}
      >
        {t('button.loadMore')}
      </StyledLoadMore>
    )
  );
};

export default LoadMore;
