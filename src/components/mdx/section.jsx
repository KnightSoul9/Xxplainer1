import { motion } from 'framer-motion';

// Section component with transition effects
const Section = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="p-8 bg-white rounded-2xl shadow-md my-8"
    >
      {children}
    </motion.section>
  );
};

export default Section;
