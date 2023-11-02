import { useTranslation } from 'react-i18next';
import { StyledNavItem, StyledNavLink, StyledNavList } from './NavBar.styled';

const listAnimation = {
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
  const lang = i18n.language;

  const navList = t('navList', {
    returnObjects: true,
  });

  return (
    <nav>
      <StyledNavList
        key={lang}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        {navList.length > 0 &&
          navList.map((navItem, idx) => (
            <StyledNavItem
              key={navItem.title}
              variants={listAnimation}
              custom={idx + 1}
            >
              <StyledNavLink to={navItem.path + '?locale=' + lang}>
                {navItem.title}
              </StyledNavLink>
            </StyledNavItem>
          ))}
      </StyledNavList>
    </nav>
  );
};

export default NavBar;
