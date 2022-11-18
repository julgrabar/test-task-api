export const formatDate = (date: string) => {
  const ms = Date.parse(date);
  const timeDiff = getRoundedTime(Date.now() - ms);
  const utcDate = new Date(date);
  return (
    timeDiff ||
    `Posted ${String(utcDate.getMonth() + 1).padStart(
      2,
      "0"
    )}.${utcDate.getFullYear()}`
  );
};

function getRoundedTime(ms: number) {
  const diffMin = Math.floor(ms / 1000 / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffYear = Math.floor(diffDay / 365);

  if (diffHour < 1) {
    return `Posted ${diffMin} minutes ago`;
  } else if (diffDay < 1) {
    return `Posted ${diffHour} hours ago`;
  } else if (diffDay <= 30) {
    return `Posted ${diffDay} days ago`;
  } else if (diffYear >= 1) {
    return `Posted ${diffYear} ${diffYear === 1 ? "year" : "years"} ago`;
  }
}
