import styled from '@emotion/styled';

export const StyledCarsGridItem = styled.li`
  transition: var(--o-animation);
  border-radius: 10px;
  background-color: var(--white-txt-color);
  height: 425px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .upperBlock {
    position: relative;
  }

  & .accentText {
    color: var(--accent-color);
    margin-left: 5px;
  }

  & .carCardTitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  & .likeBtn {
    background-color: transparent;
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 1;
    transition: var(--o-animation);

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover img {
    transform: scale(1.01);
    transition: all 500ms, filter 500ms ease-in-out;
    filter: brightness(100%);
  }

  & .carDetailsWrapper {
    color: rgba(18, 20, 23, 0.1);
    margin-bottom: auto;
    & .carDetails {
      color: rgba(18, 20, 23, 0.2);
      color: rgba(18, 20, 23, 0.5);
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
    }
    & .carDetails:not(:last-child)::after {
      content: '';
      border-right: 1px rgba(18, 20, 23, 0.2) solid;
      width: 20px;
      height: 16px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export const StyledCarsGridItemImg = styled.img`
  filter: brightness(80%);
  border-radius: 10px;
  width: 100%;
  height: 270px;
  object-fit: cover;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 14px;

  &:hover {
    transition: all 500ms ease-in-out;
    filter: grayscale(100%);
  }
`;
