// Dữ liệu mẫu cho danh sách kỳ thi và danh sách người dùng
document.getElementById("log-out").addEventListener("click", function() {
    var confirmLogout = confirm("Bạn có chắc muốn đăng xuất?");
    if (confirmLogout) {
        window.location.href = "login.html"; // Chuyển hướng sang trang login.html khi nhấn vào nút "Đăng xuất"
    }
    else {
        
    }
});


let exams = [
    { id: 1, name: "Kỳ thi luyện tập: " },
    { id: 2, name: "Kỳ thi giữa kỳ: " },
    { id: 3, name: "Kỳ thi cuối kỳ: "}
];

let users = [
    { id: 1, name: "huynh " },
    { id: 2, name: "hai " },
    { id: 3, name: "dang "},
    { id: 4, name: "viet "}
];

// Hiển thị danh sách kỳ thi
function showExams() {
    let examList = document.getElementById("examList");
    examList.innerHTML = "";
    exams.forEach(exam => {
        examList.innerHTML += `<div>${exam.name} <button class="alter" onclick="editExam(${exam.id})">Sửa</button> <button onclick="deleteExam(${exam.id})">Xóa</button></div>`;
    });
}

// Hiển thị danh sách người dùng
function showUsers() {
    let userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
        userList.innerHTML += `<div>Người dùng ${user.id}: ${user.name} <button class="alter" onclick="editUser(${user.id})">Sửa</button> <button onclick="deleteUser(${user.id})">Xóa</button></div>`;
    });
}

// Hàm tính số lượng người dùng tham gia mỗi kỳ thi
function calculateUsersPerExam() {
    let usersPerExam = {};
    users.forEach(user => {
        if (!usersPerExam[user.examId]) {
            usersPerExam[user.examId] = 1;
        } else {
            usersPerExam[user.examId]++;
        }
    });
    return usersPerExam;
}


// Hiển thị thống kê
function showStatistics() {
    let statistics = document.getElementById("statistics");
    statistics.innerHTML = `
        <h3>Thống kê</h3>
        <p>Số lượng người dùng tham gia mỗi kỳ thi:</p>
        <ul>
            ${Object.keys(usersPerExam).map(examId => `<li>Kỳ thi luyện tập: ${usersPerExam[examId]} người dự thi</li>`).join('')}
            ${Object.keys(usersPerExam).map(examId => `<li>Kỳ thi giữa kỳ: ${usersPerExam[examId]} người dự thi</li>`).join('')}
            ${Object.keys(usersPerExam).map(examId => `<li>Kỳ thi cuối kỳ: ${usersPerExam[examId]} người dự thi</li>`).join('')}
        </ul>
        <li>Tỷ lệ hoàn thành: 80%</li>
        <li>Điểm trung bình: 8.8</li>
    `;
}

// Khởi chạy
let usersPerExam = calculateUsersPerExam();
  

// Thêm mới kỳ thi
function showAddExamForm() {
    let examName = prompt("Nhập tên kỳ thi:");
    if (examName) {
        let newExam = { id: exams.length + 1, name: examName };
        exams.push(newExam);
        showExams();
    }
}

// Sửa kỳ thi
function editExam(id) {
    let newName = prompt("Nhập tên mới:");
    if (newName) {
        let examIndex = exams.findIndex(exam => exam.id === id);
        if (examIndex !== -1) {
        exams[examIndex].name = newName;
        showExams();
        }
    }
}

// Xóa kỳ thi
function deleteExam(id) {
    exams = exams.filter(exam => exam.id !== id);
    showExams();
}

// Thêm mới người dùng
function showAddUserForm() {
    let userName = prompt("Nhập tên người dùng:");
    if (userName) {
        let newUser = { id: users.length + 1, name: userName };
        users.push(newUser);
        showUsers();
    }
}

// Sửa người dùng
function editUser(id) {
    let newName = prompt("Nhập tên mới:");
    if (newName) {
        let userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
        users[userIndex].name = newName;
        showUsers();
        }
    }
}

// Xóa người dùng
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    showUsers();
}

// Khởi chạy
showExams();
showUsers();

document.getElementById("createAlterTest").addEventListener("click", function() {
    window.location.href = "createtest.html";
});

document.getElementById("statistic").addEventListener("click", function() {
    window.location.href = "statistic.html";
});

document.getElementById("studentResults").addEventListener("click", function() {
    window.location.href = "studentresults.html";
});