function searchStudent() {
    // Lấy dữ liệu từ API hoặc cơ sở dữ liệu
    var studentData = [
        {
            name: "Nguyễn Văn A",
            studentID: "B21DCCN001",
            exams: [
                {
                    examName: "Luyện tập",
                    score: 8.5,
                    status: "Hoàn thành",
                    timeTaken: "12:30 - 14:30"
                },
                {
                    examName: "Kỳ thi giữa kỳ",
                    score: 7.0,
                    status: "Hoàn thành",
                    timeTaken: "10:00 - 12:00"
                }
            ]
        },
        {
            name: "Trần Thị B",
            studentID: "B21DCCN002",
            exams: [
                {
                    examName: "Luyện tập",
                    score: 9.0,
                    status: "Hoàn thành",
                    timeTaken: "9:00 - 11:00"
                },
                {
                    examName: "Kỳ thi cuối kỳ",
                    score: null,
                    status: "Chưa hoàn thành",
                    timeTaken: null
                }
            ]
        }
    ];

    // var searchInput = document.getElementById("searchInput").value;

    // // Tìm kiếm sinh viên trong dữ liệu
    // var foundStudent = studentData.find(student => student.name.toLowerCase() === searchInput.toLowerCase() || student.studentID === searchInput || student.studentID.toLowerCase() === searchInput.toLowerCase());

    // // Hiển thị kết quả trên giao diện
    // var examList = document.getElementById("examList");
    // examList.innerHTML = "";

    // if (foundStudent) {
    //     foundStudent.exams.forEach(exam => {
    //         var row = "<tr>";
    //         row += "<td>" + exam.examName + "</td>";
    //         row += "<td>" + (exam.score != null ? exam.score : "Chưa có điểm") + "</td>";
    //         row += "<td>" + exam.status + "</td>";
    //         row += "<td>" + (exam.timeTaken != null ? exam.timeTaken : "Không có dữ liệu") + "</td>";
    //         row += "</tr>";
    //         examList.innerHTML += row;
    //     });
    // } else {
    //     examList.innerHTML = "<tr><td colspan='4'>Không tìm thấy sinh viên</td></tr>";
    // }

    var searchInput = document.getElementById("searchInput").value.toLowerCase();

    var examList = document.getElementById("examList");
    examList.innerHTML = "";

    var foundStudents = studentData.filter(function(student) {
        return student.name.toLowerCase().indexOf(searchInput) !== -1 || student.studentID.toLowerCase().indexOf(searchInput) !== -1;
    });

    if (foundStudents.length > 0) {
        foundStudents.forEach(function(foundStudent) {
            foundStudent.exams.forEach(function(exam) {
                var row = "<tr>";
                row += "<td>" + foundStudent.name + "</td>";
                row += "<td>" + exam.examName + "</td>";
                row += "<td>" + (exam.score != null ? exam.score : "Chưa có điểm") + "</td>";
                row += "<td>" + exam.status + "</td>";
                row += "<td>" + (exam.timeTaken != null ? exam.timeTaken : "Không có dữ liệu") + "</td>";
                row += "</tr>";
                examList.innerHTML += row;
            });
        });
    } else {
        examList.innerHTML = "<tr><td colspan='5'>Không tìm thấy sinh viên</td></tr>";
    }
}

function exportToPDF() {
    var doc = new jsPDF();
    var table = document.getElementById("examList");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        for (var j = 0; j < cells.length; j++) {
            var text = cells[j].innerText || cells[j].textContent;
            doc.text(text, 10, 10 + i * 10);
        }
    }

    doc.save("student_report.pdf");
}

function redirectToAdminPage() {
    window.location.href = "admin.html";
}