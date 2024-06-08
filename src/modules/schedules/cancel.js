const periods = document.querySelectorAll(".period");

periods.forEach((periods) => {
  periods.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirmed = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirmed) {
          // Remove scheduled hour
        }
      }
    }
  });
});
