export const checkFavorites = (data, favorites) => {
  if (favorites.length > 0) {
    const advertsWithFav = data.map(advert => {
      if (favorites.includes(advert.id)) {
        return { ...advert, isFavorite: true };
      }
      return advert;
    });

    if (advertsWithFav.length === 0)
      throw new Error('You reach end of the list');

    return advertsWithFav;
  }

  if (data.length === 0) throw new Error('You reach end of the list');

  return data;
};
