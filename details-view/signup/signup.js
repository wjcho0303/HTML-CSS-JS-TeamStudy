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
    });
  });
};
