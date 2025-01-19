import styles from "@/styles/post.module.css";

// export default function Text({ title }) {
//   if (!title) {
//     return null;
//   }
//   return title.map((value, index) => {
//     const {
//       annotations: { bold, code, color, italic, strikethrough, underline },
//       text,
//     } = value;
//     return (
//       <span
//         className={[
//           bold ? styles.bold : "",
//           code ? styles.code : "",
//           italic ? styles.italic : "",
//           strikethrough ? styles.strikethrough : "",
//           underline ? styles.underline : "",
//         ].join(" ")}
//         style={color !== "default" ? { color } : {}}
//         key={index}
//       >
//         {text.link ? (
//           <a href={text.link.url} className="text-blue-500 hover:underline">
//             {text.content}
//           </a>
//         ) : (
//           text.content
//         )}
//       </span>
//     );
//   });
// }

export default function Text({ title }) {
  if (!title) {
    return null;
  }

  return title.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    const classNames = [
      bold ? 'font-bold' : '',
      italic ? 'italic' : '',
      strikethrough ? 'line-through' : '',
      underline ? 'underline' : '',
      code ? 'font-mono bg-gray-100 px-1 py-0.5 rounded' : '',
      color !== 'default' ? getColorClass(color) : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span className={classNames} key={index}>
        {text.link ? (
          <a href={text.link.url} className="text-blue-500 hover:underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
}

function getColorClass(color) {
  const colorMap = {
    gray: 'text-gray-500',
    brown: 'text-yellow-700',
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
    red: 'text-red-500',
  };
  return colorMap[color] || '';
}
