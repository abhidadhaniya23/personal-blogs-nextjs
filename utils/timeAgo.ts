import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

const getTimeAgo = (date: Date) => {
  return timeAgo.format(date);
};

export default getTimeAgo;
