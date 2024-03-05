document.addEventListener('DOMContentLoaded', function () {
    const correctCountElement = document.getElementById('correctCount');
    const wrongCountElement = document.getElementById('wrongCount');
    const chartContainer = document.getElementById('chartContainer');
    const correctPoint = document.getElementById('correctPoint');
    const name_sv = document.getElementById("name_student");
  
    const correctCount = localStorage.getItem('correctCount');
    const wrongCount = localStorage.getItem('wrongCount');
    const name =   localStorage.getItem('username')
    

    const totalScore = correctCount * 0.9;

    name_sv.innerHTML = `Chúc Mừng ${name} Đã Hoàn Thành Bài Thi!`;
    correctPoint.innerHTML = `Điểm: <span>${totalScore}</span>`;
    correctCountElement.innerHTML = `Số câu đúng: <span>${correctCount}</span>`;
    wrongCountElement.innerHTML = `Số câu sai: <span>${wrongCount}</span>`;
  
    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Đúng', 'Sai'],
        datasets: [{
          data: [correctCount, wrongCount],
          backgroundColor: ['#2ecc71', '#e74c3c'],
        }],
      },
    });
  
    chartContainer.style.display = 'block';
  });
  