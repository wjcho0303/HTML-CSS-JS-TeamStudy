window.onload = function () {
  const plans = document.querySelectorAll(".plan-container");
  plans.forEach((plan) => {
    plan.addEventListener("click", function () {
      const container = this.closest(".plan-container");

      document.querySelectorAll(".plan-container").forEach((otherContainer) => {
        if (otherContainer !== container) {
          otherContainer.style.transition = "";
          otherContainer.style.boxShadow = "";
        }
      });

      container.style.transition =
        "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s";
      container.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 4px 10px 0px";
    });
  });
};
