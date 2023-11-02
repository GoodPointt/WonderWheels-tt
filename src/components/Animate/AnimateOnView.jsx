import { motion } from 'framer-motion';

const titleAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      ease: 'easeOut',
      duration: 0.7,
    },
  },
};

const AnimateOnView = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={titleAnimation}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
