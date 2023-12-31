import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick, isDisabled = false }) => {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={handleClick}
      aria-label={children}
      aria-disabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
