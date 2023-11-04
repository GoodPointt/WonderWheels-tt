import Skeleton from './Skeleton';

const SkeletonItem = () => {
  return (
    <div className="card">
      <Skeleton classes="img width-100" />
      <Skeleton classes="title width-50" />
      <Skeleton classes="title width-20 ml" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="text width-100" />
      <Skeleton classes="button width-100" />
    </div>
  );
};
export default SkeletonItem;
