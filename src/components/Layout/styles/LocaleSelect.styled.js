import styled from '@emotion/styled';

export const StyledLocaleSelectBtn = styled.button`
  font-size: 24px;
  font-weight: 600;
  position: fixed;
  right: 20px;
  top: 25px;
  z-index: 10;
  border-radius: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: var(--o-animation);
  background-color: transparent;
  text-transform: uppercase;
  color: var(--accent-color);

  &:hover {
    transform: scale(1.1);
    color: var(--btn-hover-color);
  }
`;
