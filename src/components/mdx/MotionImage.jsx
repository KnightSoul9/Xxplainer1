import { motion } from 'framer-motion';

// Image component with animation
const MotionImage = ({ src, alt }) => {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="rounded-lg shadow-lg mb-6"
      src={src}
      alt={alt}
    />
  );
};

export default MotionImage;
