import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  & li {
    transition: var(--o-animation);
  }
  & li:hover {
    transform: scale(1.1);
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 16px;
  text-transform: uppercase;

  transition: var(--o-animation);

  &:hover {
    text-shadow: -2px 1px 8px var(--accent-color);
  }

  &.active {
    color: var(--btn-hover-color);
    text-shadow: -2px 1px 8px var(--accent-color);
  }
`;
