export const formatDate = (date: string) => {
  const msCreationDate = Date.parse(date);
  const ms = Date.now() - msCreationDate;
  const diffMin = Math.floor(ms / 1000 / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonths = Math.floor(diffDay / 31);
  const diffYear = Math.floor(diffDay / 365);

  if (diffHour < 1) {
    return `Posted ${diffMin} min ago`;
  } else if (diffDay < 1) {
    return `Posted ${diffHour} ${diffHour === 1 ? "hour" : "hours"} ago`;
  } else if (diffMonths < 1) {
    return `Posted ${diffDay} ${diffDay === 1 ? "day" : "days"} ago`;
  } else if (diffYear < 1) {
    return `Posted ${diffMonths} ${diffMonths === 1 ? "month" : "months"} ago`;
  } else {
    return `Posted ${diffYear} ${diffYear === 1 ? "year" : "years"} ago`;
  }
};
