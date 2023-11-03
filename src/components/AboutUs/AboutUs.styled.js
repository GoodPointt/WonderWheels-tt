import styled from '@emotion/styled';

export const StyledBenefitsSection = styled.section`
  padding: 90px 0px;

  & h2 {
    margin-bottom: 40px;
  }

  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2rem;
    border: 2px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.74) 0px 12px 27px -3px;
    border-radius: 2rem;

    @media (max-width: 779px) {
      grid-template-columns: 1fr;
    }
  }
`;
