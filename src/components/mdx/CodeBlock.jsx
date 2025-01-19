import { motion } from 'framer-motion';

// Code Block component with animation
const CodeBlock = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 30px rgba(0, 0, 150, 0.2)"
      }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4 rounded-xl shadow-lg my-8 overflow-auto"
    >
      <pre>{children}</pre>
    </motion.div>
  );
};

export default CodeBlock;
