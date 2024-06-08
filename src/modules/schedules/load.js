import { scheduleShow } from "./show.js";
import { hoursLoad } from "../form/hours-load";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  const date = selectedDate.value;

  // Fetch day schedules on API
  const daySchedules = await scheduleFetchByDay({ date });

  // Render day schedules
  scheduleShow({ daySchedules });

  // Render available hours
  hoursLoad({ date });
}
