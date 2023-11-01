import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div>404, Page Not Found 😒</div>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default NotFoundPage;
