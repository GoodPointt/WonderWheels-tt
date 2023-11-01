import styled from '@emotion/styled';

export const StyledLocaleSelectBtn = styled.button`
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
  transition: all 300ms ease;
  background-color: transparent;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.1);
  }
`;
