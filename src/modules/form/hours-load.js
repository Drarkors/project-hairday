import dayjs from "dayjs";
import { hoursClick } from "./hours-click";
import { openingHours } from "../../utils/opening-hours";

const hoursList = document.getElementById("hours");

export function hoursLoad({ date, daySchedules }) {
  hoursList.innerHTML = "";

  const unavailableHours = daySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduledHour] = hour.split(":");

    // Check if hour has passed
    const isHourPast = dayjs(date).add(scheduledHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hoursList.append(li);
  });

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hoursList.append(header);
}
