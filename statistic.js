
// Dữ liệu mẫu về sinh viên tham gia kỳ thi
const studentsData = [
    { id: 1, name: 'Nguyễn Văn A', exam: 'Kỳ thi luyện tập', score: 8.5, date: '15/01/2024' },
    { id: 2, name: 'Trần Thị B', exam: 'Kỳ thi giữa kỳ', score: 7.8, date: '20/02/2024' },
    { id: 3, name: 'Phạm Văn C', exam: 'Kỳ thi cuối kỳ', score: 9.0, date: '01/03/2024'}
    // Thêm dữ liệu khác tại đây
];

function calculateStatistics(data) {
    const totalParticipants = data.length;
    const completedParticipants = data.filter(student => student.score >= 0).length;
    const totalScores = data.reduce((sum, student) => sum + student.score, 0);
    const averageScore = totalScores / totalParticipants;

    // Phân phối điểm số
    const scoreDistribution = {};
    data.forEach(student => {
        const score = Math.floor(student.score); // Làm tròn điểm
        if (scoreDistribution[score]) {
        scoreDistribution[score]++;
        } else {
        scoreDistribution[score] = 1;
        }
    });

    return {
        totalParticipants,
        completedParticipants,
        averageScore: averageScore.toFixed(2), // Làm tròn điểm trung bình đến 2 chữ số sau dấu thập phân
        scoreDistribution,
    };
}

function displayStatistics() {
const statistics = calculateStatistics(studentsData);

// Hiển thị thống kê trên trang web
document.getElementById('totalParticipants').textContent = statistics.totalParticipants;
document.getElementById('completedParticipants').textContent = statistics.completedParticipants;
document.getElementById('averageScore').textContent = statistics.averageScore;

// Hiển thị phân phối điểm số bằng biểu đồ (ví dụ)
const chartData = Object.entries(statistics.scoreDistribution);
const chart = document.getElementById('scoreChart');
chart.innerHTML = '';
chartData.forEach(([score, count]) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = count * 10 + 'px'; // Giá trị * 10 để biểu diễn đồ thị
    bar.textContent = score;
    chart.appendChild(bar);
});
}

// Gọi hàm để hiển thị thống kê khi trang web được tải
displayStatistics();
  
// Hàm để tạo nội dung cho bảng
function generateTable(data) {
    const tableBody = document.querySelector('#statistics table tbody');
    let html = '';
    data.forEach((student, index) => {
    html += `
        <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.exam}</td>
        <td>${student.score}</td>
        <td>${student.date}</td>
        </tr>
    `;
    });
    tableBody.innerHTML = html;
}

// Gọi hàm để tạo bảng từ dữ liệu mẫu
generateTable(studentsData);


function exportToPDF() {
    // Code để xuất báo cáo dưới dạng PDF
    alert('Xuất báo cáo PDF');
}

function exportToExcel() {
    // Code để xuất báo cáo dưới dạng Excel
    alert('Xuất báo cáo Excel');
}

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "admin.html";
});

document.getElementById('exam').addEventListener('change', generateStatistics);

// Gọi hàm generateStatistics lần đầu để hiển thị thống kê mặc định
generateStatistics();

function redirectToAdminPage() {
    window.location.href = "admin.html";
}

