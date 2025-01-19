export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate.replace(/(\d{1,2})(st|nd|rd|th)/, "$1");
};
