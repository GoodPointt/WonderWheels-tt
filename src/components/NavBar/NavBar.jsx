import { useTranslation } from 'react-i18next';
import { StyledNavItem, StyledNavLink, StyledNavList } from './NavBar.styled';
import { useDispatch } from 'react-redux';
import { resetPage } from '../../redux/adverts/slice';

const navBarAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      ease: 'easeInOut',
      duration: 0.4,
    },
  }),
};

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const lang = i18n.language;

  const navList = t('navList', {
    returnObjects: true,
  });

  const handleRouteChange = () => {
    dispatch(resetPage());
  };

  return (
    <nav>
      <StyledNavList
        aria-label={t('aria.navMenu')}
        initial="hidden"
        viewport={{ amount: 0.1, once: true }}
        whileInView="visible"
        key={lang}
      >
        {navList.length > 0 &&
          navList.map((navItem, idx) => (
            <StyledNavItem
              aria-label={navItem.title}
              variants={navBarAnimation}
              custom={idx + 1}
              key={navItem.title}
            >
              <StyledNavLink
                onClick={handleRouteChange}
                to={navItem.path + '?locale=' + lang}
              >
                {navItem.title}
              </StyledNavLink>
            </StyledNavItem>
          ))}
      </StyledNavList>
    </nav>
  );
};

export default NavBar;
