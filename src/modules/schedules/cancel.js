import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

periods.forEach((periods) => {
  periods.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirmed = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirmed) {
          // Remove scheduled hour
          await scheduleCancel({ id });

          schedulesDay();
        }
      }
    }
  });
});
