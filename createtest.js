document.getElementById("examForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle form submission here
    // You can collect form data and perform further actions like sending it to server or saving to local storage
    // Example: 
    var formData = new FormData(this);
    var examData = {};
    formData.forEach(function(value, key){
        examData[key] = value;
    });
    console.log(examData);
});

document.getElementById("submit").addEventListener("click", function() {
    alert("Tạo kỳ thi thành công");
});
// Sử dụng event listener để gọi hàm redirectToAdminPage khi nút được nhấn
document.getElementById("home").addEventListener("click", redirectToAdminPage());
function redirectToAdminPage() {
    window.location.href = "admin.html";
}

function addQuestion() {
    var questionList = document.getElementById("questionList");
    var questionCount = questionList.children.length + 1;
    
    var questionDiv = document.createElement("div");
    questionDiv.innerHTML = `
        <label for="question${questionCount}">Câu hỏi ${questionCount}:</label>
        <input type="text" id="question${questionCount}" name="question${questionCount}" required>
        <div class="answer-options">
            <label for="answerOption1_${questionCount}">Option 1:</label>
            <input type="text" id="answerOption1_${questionCount}" name="answerOption1_${questionCount}" class="answer-option" required>
            <label for="answerOption2_${questionCount}">Option 2:</label>
            <input type="text" id="answerOption2_${questionCount}" name="answerOption2_${questionCount}" class="answer-option" required>
            <!-- Add more options if needed -->
        </div>
        <label for="correctAnswer_${questionCount}">Câu trả lời đúng:</label>
        <select id="correctAnswer_${questionCount}" name="correctAnswer_${questionCount}" required>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <!-- Add more options if needed -->
        </select>
        <button type="button" onclick="removeQuestion(this)">Xóa</button>
    `;
    
    questionList.appendChild(questionDiv);
}
