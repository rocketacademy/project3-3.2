export function formatDate(dateTime) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formattedDate = new Date(dateTime).toLocaleString("en-US", options);
  return formattedDate;
}
