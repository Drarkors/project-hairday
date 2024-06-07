export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove selected from all available hours
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Add selected class to selected hour
      selected.target.classList.add("hour-selected");
    });
  });
}
