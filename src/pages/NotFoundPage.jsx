import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

const NotFoundPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url("https://viralsolutions.net/wp-content/uploads/2021/09/VS-404-page-not-found-1024x512-1.jpg")',
        }}
      >
        <Link style={{ width: 200 }} to="/">
          <Button>BACK TO HOME</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
