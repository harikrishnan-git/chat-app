export default function extractTime(dateTime) {
  const date = new Date(dateTime);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}
