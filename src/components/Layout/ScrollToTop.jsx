import { useEffect, useState } from 'react';
import { GoTopBtn } from './styles/ScrollToTop.styled';

const ScrollToTop = () => {
  const [isShown, setIsShown] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTrigger = 300;
    setIsShown(scrollY > scrollTrigger);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <GoTopBtn
      className={`scroll-up ${isShown ? 'shown' : ''}`}
      onClick={scrollToTop}
      id="scroll-up"
      href="#"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          fill="rgba(255,255,255,1)"
          d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
        ></path>
      </svg>
    </GoTopBtn>
  );
};

export default ScrollToTop;
