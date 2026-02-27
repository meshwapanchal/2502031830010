const ctx = document.getElementById('weeklyChart');

if (ctx) {
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Steps',
      data: [4000, 6000, 8000, 7500, 9000, 10000, 8500],
      borderColor: '#27AE60',
      tension: 0.4
    }]
  }
});
}
