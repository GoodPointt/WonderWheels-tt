import styled from '@emotion/styled';

export const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  z-index: 2;
  width: 100%;
  margin-bottom: 40px;

  & #react-select-2-listbox {
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    padding: 14px 8px 14px 18px;
  }
  & #react-select-3-listbox {
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    padding: 14px 8px 14px 18px;
  }

  & .makes {
    width: 225px;
  }
  & .prices {
    width: 105px;
  }

  & h4 {
    color: var(--secondary-txt-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.28;
    margin-bottom: 8px;
  }

  & .mileageDesc {
    width: 150px;
    border-bottom-left-radius: 14px;
    border-top-left-radius: 14px;
  }
  & .mileageAsc {
    width: 150px;
  }

  & button {
    max-width: 136px;
  }
`;
