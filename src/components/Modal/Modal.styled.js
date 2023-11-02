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
  /* color: wheat; */
  /* width: 95vw; */
  /* max-width: 1080px; */
  background-color: var(--white-txt-color);
  border-radius: 24px;
  box-shadow: 0px 0px 29px #d4d4d4, 0px 0px 0px 0px #000,
    0px 0px 0px 0px #252525;

  /* max-height: calc(100vh - 50px); */
`;
