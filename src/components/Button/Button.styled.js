import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: var(--accent-color);
  color: var(--white-txt-color);
  transition: var(--o-animation);

  &:hover {
    background-color: var(--btn-hover-color);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(38, 82, 183, 0.6);
  }
`;
