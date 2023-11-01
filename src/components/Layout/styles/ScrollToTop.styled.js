import styled from '@emotion/styled';

export const GoTopBtn = styled.button`
  position: fixed;
  right: 20px;
  bottom: 25px;
  z-index: 10;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(29, 29, 31, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 300ms ease;
  visibility: hidden;

  &.shown {
    visibility: visible;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
