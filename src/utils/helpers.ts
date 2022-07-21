import moment from "moment";

const formatTheDate = (timeStamp: number, format: string) =>
  moment(timeStamp).format(format);

const formatTheDateInRelativeTime = (
  timeStamp: number,
  format: "day" | "hour",
) => moment(timeStamp).startOf(format).fromNow();

const helpers = {
  formatTheDate,
  formatTheDateInRelativeTime,
};

export default helpers;
