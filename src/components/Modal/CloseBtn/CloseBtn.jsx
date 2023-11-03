import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const CloseBtn = ({ toggleModal }) => {
  return (
    <div className="closeBtn" onClick={toggleModal}>
      <AiOutlineClose size={30} />
    </div>
  );
};

export default CloseBtn;

CloseBtn.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
