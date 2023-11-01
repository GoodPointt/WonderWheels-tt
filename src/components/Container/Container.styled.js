import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 480px;

  @media screen and (min-width: 480px) {
    & {
      max-width: 428px;
    }
  }

  @media screen and (min-width: 768px) {
    & {
      max-width: 768px;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
      max-width: 1158px;
    }
  }
`;
