import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import LocaleSelect from './LocaleSelect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Header />
      <main>{children}</main>
      <Footer />
      <LocaleSelect />
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={2700}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
