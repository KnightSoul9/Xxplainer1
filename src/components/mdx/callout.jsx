import { motion } from 'framer-motion';

// Callout component for informational and warning messages
const Callout = ({ type, title, children }) => {
  let backgroundColor = '';
  let borderColor = '';
  let icon = '';

  if (type === 'info') {
    backgroundColor = 'bg-blue-50';
    borderColor = 'border-blue-400';
    icon = '💡'; // Info icon
  } else if (type === 'warning') {
    backgroundColor = 'bg-yellow-50';
    borderColor = 'border-yellow-400';
    icon = '⚠️'; // Warning icon
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`p-6 border-l-4 ${borderColor} ${backgroundColor} rounded-2xl shadow-lg my-6`}
    >
      <div className="flex">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-gray-700 text-base">{children}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Callout;
