import { useTranslation } from 'react-i18next';
import { StyledNavLink, StyledNavList } from './NavBar.styled';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const navList = t('navList', {
    returnObjects: true,
  });

  return (
    <nav>
      <StyledNavList>
        {navList.length > 0 &&
          navList.map(navItem => (
            <li key={navItem.title}>
              <StyledNavLink to={navItem.path + '?locale=' + lang}>
                {navItem.title}
              </StyledNavLink>
            </li>
          ))}
      </StyledNavList>
    </nav>
  );
};

export default NavBar;
