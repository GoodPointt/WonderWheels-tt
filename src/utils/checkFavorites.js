import { VARIANT } from '../common/constants';

export const checkFavorites = (data, favorites, variant = VARIANT.ALL) => {
  if (favorites.length === 0) {
    return data;
  }

  let advertsWithFav;

  if (variant === VARIANT.ALL) {
    advertsWithFav = data.map(advert => ({
      ...advert,
      isFavorite: favorites.includes(advert.id),
    }));
  } else if (variant === VARIANT.FAV) {
    advertsWithFav = data
      .filter(advert => favorites.includes(advert.id))
      .map(advert => ({
        ...advert,
        isFavorite: true,
      }));
  }

  if (advertsWithFav.length === 0) {
    throw new Error('Nothing found matching filers');
  }

  return advertsWithFav;
};
