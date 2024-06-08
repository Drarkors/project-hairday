import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    const daySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return daySchedules;
  } catch (error) {
    console.error(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
