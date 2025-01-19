import { motion } from 'framer-motion';

// Paragraph component
const StyledParagraph = ({ children }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="text-base text-gray-800 leading-relaxed mb-4"
    >
      {children}
    </motion.p>
  );
};

export default StyledParagraph;
