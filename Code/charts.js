function loadCharts() {

  const weightCtx = document.getElementById("weightChart");
  if (weightCtx) {
    new Chart(weightCtx, {
      type: "line",
      data: {
        labels: ["Week1","Week2","Week3","Week4"],
        datasets: [{
          label: "Weight",
          data: [70, 69, 68, 67],
          borderColor: "#2F80ED",
          tension: 0.4
        }]
      }
    });
  }

  const activityCtx = document.getElementById("activityChart");
  if (activityCtx) {
    new Chart(activityCtx, {
      type: "bar",
      data: {
        labels: ["Mon","Tue","Wed","Thu","Fri"],
        datasets: [{
          label: "Steps",
          data: [4000,6000,8000,7000,9000],
          backgroundColor: "#27AE60"
        }]
      }
    });
  }

  const nutritionCtx = document.getElementById("nutritionChart");
  if (nutritionCtx) {
    new Chart(nutritionCtx, {
      type: "pie",
      data: {
        labels: ["Protein","Carbs","Fats"],
        datasets: [{
          data: [30,50,20],
          backgroundColor: ["#2F80ED","#27AE60","#56CCF2"]
        }]
      }
    });
  }
}
