import NotFoundPage from '../pages/NotFoundPage';
import Pages from './Lazy';

export const routes = [
  {
    path: '/',
    element: <Pages.Home />,
  },
  {
    path: '/catalog',
    element: <Pages.Catalog />,
  },
  {
    path: '/favorites',
    element: <Pages.Favorites />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
