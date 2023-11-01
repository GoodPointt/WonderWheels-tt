import { StyledButton } from './Button.styled';

const Button = ({ children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
