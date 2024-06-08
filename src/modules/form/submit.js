import dayjs from "dayjs";

import { schedulesDay } from "../schedules/load.js";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const today = dayjs(new Date()).format("YYYY-MM-DD");

// Set current date and minimum date on input
selectedDate.value = today;
selectedDate.min = today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora do atendimento!");
    }

    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();

    await scheduleNew({ id, name, when });

    // Refresh schedules
    await schedulesDay();

    // Clearing fields
    clientName.value = "";
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento");
  }
};
