import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 12px;
  max-width: 768px;

  @media screen and (min-width: 768px) {
    & {
      max-width: 1176px;
    }
  }
`;
