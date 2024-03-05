// script.js
document.addEventListener("DOMContentLoaded", function() {
    const examsList = document.getElementById("examsList");
    const searchInput = document.getElementById("searchInput");
    const statusFilter = document.getElementById("statusFilter");

    // Danh sách các kỳ thi (có thể là dữ liệu động từ server)
    const exams = [
        { name: "Kỳ thi giữa kỳ", status: "open" },
        { name: "Kỳ thi giữa kỳ", status: "closed" },
        { name: "Kỳ thi cuối kỳ", status: "closed" },
    // Thêm các kỳ thi khác ở đây
];
  
// Hiển thị danh sách kỳ thi ban đầu
displayExams(exams);

// Lắng nghe sự kiện khi người dùng tìm kiếm
searchInput.addEventListener("input", filterExams);

// Lắng nghe sự kiện khi người dùng lọc theo trạng thái
statusFilter.addEventListener("change", filterExams);

document.getElementById("searchButton").addEventListener("click", function() {
    filterExams();
});

document.getElementById("log-out").addEventListener("click", function() {
    var confirmLogout = confirm("Bạn có chắc muốn đăng xuất?");
    if (confirmLogout) {
        window.location.href = "login.html"; // Chuyển hướng sang trang login.html khi nhấn vào nút "Đăng xuất"
    }
    else {
        
    }
});

function displayExams(exams) {
    examsList.innerHTML = "";
    exams.forEach((exam, index) => {
    const examElement = document.createElement("div");
    examElement.classList.add("exam");
    examElement.innerHTML = `
    <h2>${exam.name}</h2>
    <p><span class="status">${exam.status === "open" ? "Trạng thái: Mở" : "Trạng thái: Đóng"}</span></p>
    <button class="start-btn">Bắt đầu</button>
    `;
    examsList.appendChild(examElement);
});
}

// Lắng nghe sự kiện khi người dùng nhấn vào nút "Bắt đầu" trong phần "Kỳ thi giữa kỳ"
const startButton1 = document.querySelector('#examsList .exam:nth-child(1) .start-btn');
    startButton1.addEventListener("click", function() {
    // Chuyển hướng trang sang test.html khi nhấn vào nút "Bắt đầu" của kỳ thi luyện tập
    window.location.href = "test.html";
});

// Lắng nghe sự kiện khi người dùng nhấn vào nút "Bắt đầu" trong phần "Kỳ thi giữa kỳ"
const startButton2 = document.querySelector('#examsList .exam:nth-child(2) .start-btn');
    startButton2.addEventListener("click", function() {
    // Chuyển hướng trang sang test.html khi nhấn vào nút "Bắt đầu" của kỳ thi luyện tập
    alert("Chưa đến thời gian mở bài thi");
});

// Lắng nghe sự kiện khi người dùng nhấn vào nút "Bắt đầu" trong phần "Kỳ thi cuối kỳ"
const startButton3 = document.querySelector('#examsList .exam:nth-child(3) .start-btn');
    startButton3.addEventListener("click", function() {
    // Chuyển hướng trang sang test.html khi nhấn vào nút "Bắt đầu" của kỳ thi luyện tập
    alert("Chưa đến thời gian mở bài thi");
});

function filterExams() {
    const searchTerm = searchInput.value.toLowerCase();
    const status = statusFilter.value;

    const filteredExams = exams.filter(exam => {
    const nameMatch = exam.name.toLowerCase().includes(searchTerm);
    const statusMatch = status === "all" || exam.status === status;
    return nameMatch && statusMatch;
    });

    displayExams(filteredExams);
}
});
