import { hoursLoad } from "./hours-load";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
  const date = selectedDate.value;

  // Render available hours
  hoursLoad({ date });
}
