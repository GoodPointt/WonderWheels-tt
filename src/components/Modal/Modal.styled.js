import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ModalBackdrop = styled(motion.div)`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  background-color: var(--white-txt-color);
  border-radius: 24px;
  box-shadow: 0px 0px 29px #d4d4d4, 0px 0px 0px 0px #000,
    0px 0px 0px 0px #252525;

  & .closeBtn {
    position: absolute;
    top: 2%;
    right: 2%;
    background-color: transparent;
    color: var(--primary-txt-color);
    transition: var(--o-animation);

    &:hover {
      color: var(--accent-color);
      cursor: pointer;
    }
  }
`;
