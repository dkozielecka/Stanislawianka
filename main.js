const buttons = Array.prototype.slice.call(document.querySelectorAll(".btn"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons
      .filter((btn) => btn !== button)
      .forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});
