import { StyledButton } from './Button.styled';

const Button = ({ children, handleClick, isDisabled = false }) => {
  return (
    <StyledButton disabled={isDisabled} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
