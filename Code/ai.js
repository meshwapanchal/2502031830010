function generateInsights() {
  let data = getHealthData();
  if (data.length === 0) return "No data available.";

  let last = data[data.length - 1];

  if (last.sleep < 6) {
    return "Your sleep pattern has decreased. Try sleeping 7-8 hours.";
  }

  if (last.water < 2) {
    return "Increase water intake by 1L daily.";
  }

  return "You are maintaining healthy habits. Keep it up!";
}
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("AI-Driven Health Journal Report", 20, 20);
  doc.text("Generated Successfully", 20, 40);

  doc.save("Health_Report.pdf");
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
