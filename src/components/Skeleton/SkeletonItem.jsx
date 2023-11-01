import Skeleton from './Skeleton';

const SkeletonItem = () => {
  return (
    <div className="post">
      <Skeleton classes="img width-100" />
      <Skeleton classes="title width-50" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
    </div>
  );
};
export default SkeletonItem;
