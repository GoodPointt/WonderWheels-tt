import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CloseBtn = ({ toggleModal }) => {
  const { t } = useTranslation();
  return (
    <div
      className="closeBtn"
      onClick={toggleModal}
      aria-label={t('aria.close')}
    >
      <AiOutlineClose size={30} />
    </div>
  );
};

export default CloseBtn;

CloseBtn.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
