// Bộ đếm thời gian
var countdown = document.getElementById('countdown');
var timeLeft = 600; // 10 phút
var timer = setInterval(function() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    countdown.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    if (timeLeft === 0) {
    clearInterval(timer);
    alert("Hết giờ!");
    alert("Nộp bài thành công");
    window.location.href = "result.html";
    } else {
    timeLeft--;
    }
}, 1000);

// Xử lý sự kiện khi nộp bài
var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {
    clearInterval(timer); // Dừng bộ đếm thời gian
    submitQuiz();
});

function submitQuiz() {
    // Xử lý nộp bài ở đây, ví dụ: hiển thị kết quả
    var confirmation = confirm("Sau khi nộp bài, bạn sẽ không thể làm lại lần thứ 2. Bạn có chắc chắn muốn nộp bài?");
    if (confirmation) {
        clearInterval(timer); // Stop the countdown
        alert("Nộp bài thành công");
        // Redirect to a new page (you can replace "new_page.html" with the actual URL)
        window.location.href = "result.html";
    }
}