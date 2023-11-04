import PropTypes from 'prop-types';
import './Skeleton.css';

const Skeleton = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};
export default Skeleton;

Skeleton.propTypes = {
  classes: PropTypes.string.isRequired,
};
