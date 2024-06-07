import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduledHour] = hour.split(":");

    // Check if hour has passed
    const isHourPast = dayjs(date).add(scheduledHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });
}
