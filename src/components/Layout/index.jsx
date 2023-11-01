import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import LocaleSelect from './LocaleSelect';
import { useAdverts } from '../../hooks/useAdverts';

import SkeletonList from '../Skeleton/SkeletonList';

const Layout = ({ children }) => {
  const { isLoading, error } = useAdverts();

  return (
    <div className="body">
      <Header />
      <main>
        {children}
        {isLoading && <SkeletonList />}
      </main>
      <Footer />
      <LocaleSelect />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
