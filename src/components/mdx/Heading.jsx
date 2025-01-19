import { motion } from 'framer-motion';

const Heading = ({ level, children }) => {
  const Tag = `h${level}`;

  const baseStyle = "font-bold mb-6 text-gray-800";
  const sizeStyle = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base"
  };

  // Use motion with dynamic Tag directly, without .custom()
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${baseStyle} ${sizeStyle[level]}`}
    >
      {children}
    </MotionTag>
  );
};

export default Heading;
