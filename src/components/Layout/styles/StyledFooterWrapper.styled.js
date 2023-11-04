import styled from '@emotion/styled';

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: var(--white-txt-color);

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
  }

  & .footerContacs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .Hours.table > tbody > tr > td {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid #111;
    padding: 0 12px;
    line-height: 48px;
  }

  & .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  & .footerTitle {
    color: var(--accent-color);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    text-align: center;
  }

  & .contactsList {
    padding-left: 30px;
  }

  & .contactsItem {
    transition: var(--o-animation);
    font-weight: 400;
    line-height: 2;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;

    @media screen and (min-width: 480px) {
      font-size: 16px;
    }

    &:hover {
      color: var(--secondary-txt-color);
      cursor: pointer;
    }
  }
`;
