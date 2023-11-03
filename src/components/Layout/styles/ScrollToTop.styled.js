import styled from '@emotion/styled';

export const GoTopBtn = styled.button`
  position: fixed;
  right: 3%;
  bottom: 3%;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(29, 29, 31, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  transition: var(--o-animation);
  visibility: hidden;

  &.shown {
    visibility: visible;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
