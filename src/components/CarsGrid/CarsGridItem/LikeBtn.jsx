import { BiHeart, BiSolidHeart } from 'react-icons/bi';

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
