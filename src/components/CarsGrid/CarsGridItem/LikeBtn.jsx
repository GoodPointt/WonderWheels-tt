import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import PropTypes from 'prop-types';

const LikeBtn = ({ hadleLike, isFavorite }) => {
  return (
    <button onClick={hadleLike} className="likeBtn">
      {isFavorite ? (
        <BiSolidHeart size={30} color={'#3470FF'} />
      ) : (
        <BiHeart size={30} color={'#fff'} />
      )}
    </button>
  );
};

export default LikeBtn;

LikeBtn.propTypes = {
  hadleLike: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
