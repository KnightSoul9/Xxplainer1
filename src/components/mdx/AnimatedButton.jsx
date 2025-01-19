import { motion } from 'framer-motion';

// Button with hover animation
const AnimatedButton = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
