function saveHealthData(data) {
  let records = JSON.parse(localStorage.getItem("healthData")) || [];
  records.push(data);
  localStorage.setItem("healthData", JSON.stringify(records));
}

function getHealthData() {
  return JSON.parse(localStorage.getItem("healthData")) || [];
}
