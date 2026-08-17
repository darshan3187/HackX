export const formatDate = (dateString, options = {}) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const defaultOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...options
  };

  return date.toLocaleDateString("en-GB", defaultOptions);
};
