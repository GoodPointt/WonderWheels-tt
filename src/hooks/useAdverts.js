import { useSelector } from 'react-redux';

export const useAdverts = () => {
  const { adverts, favorites, page, isLoading, error } = useSelector(
    state => state.adverts
  );
  return {
    adverts,
    favorites,
    page,
    isLoading,
    error,
  };
};
