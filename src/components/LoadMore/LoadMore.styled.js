import styled from '@emotion/styled';

export const StyledLoadMore = styled.button`
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  margin: 0 auto;

  transition: var(--o-animation);

  &:hover {
    color: var(--btn-hover-color);
  }

  &:disabled {
    color: var(--secondary-color);
    cursor: not-allowed;
  }
`;
