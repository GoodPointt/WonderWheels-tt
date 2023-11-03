import styled from '@emotion/styled';

export const StyledCarDetails = styled.div`
  max-width: 540px;
  padding: 40px;

  & h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;

    & span {
      color: var(--accent-color);
      margin: 0 10px;
    }
  }

  & h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px;
  }

  & .desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    margin-bottom: 24px;
  }

  & .subDesc {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    max-width: 320px;
    margin-bottom: 14px;
  }

  & img {
    border-radius: 24px;
    margin-bottom: 24px;
  }

  & .condition {
    border-radius: 35px;
    background: #f9f9f9;
    display: inline-flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: fit-content;
  }
`;
