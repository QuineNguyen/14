// Sample data
const totalQuestions = 5;
const correctAnswers = 3;
const userAnswers = ['A. Hyperlinks and Text Markup Language', 'A. The World Wide Web Consortium', 'B. Computer Style Sheets', 'A. Client', 'C. Cả hai dạng'];
const correctOptions = ['A. Hyperlinks and Text Markup Language', 'A. The World Wide Web Consortium', 'C. Cascading Style Sheets', 'A. Client', 'B. Biên dịch'];
const questionDetails = [
  "Câu hỏi 1: Từ HTML là viết tắt của từ nào?",
  "Câu hỏi 2: Ai (tổ chức nào) tạo ra Web standards?",
  "Câu hỏi 3: CSS là viết tắt của?",
  "Câu hỏi 4: Javascript là ngôn ngữ xử lý ở?",
  "Câu hỏi 5: Javascript là ngôn ngữ thông dịch hay biên dịch?"
  // Add more questions here
];

// Display result
const resultContainer = document.getElementById('result');
resultContainer.innerHTML = `
    <p>Tổng số câu: ${totalQuestions}</p>
    <p>Số câu trả lời đúng: ${correctAnswers}</p>
    <p>Điểm số: ${(correctAnswers / totalQuestions) * 10}</p>
    <button onclick="showAnswers()">Xem câu trả lời đúng</button>
`;

// Display answers
const answersContainer = document.getElementById('answers');
for (let i = 0; i < totalQuestions; i++) {
    const div = document.createElement('div');
    div.classList.add('answer');
    div.innerHTML = `
        <p>${questionDetails[i]}</p>
        <p>Câu trả lời của bạn: ${userAnswers[i]}</p>
        <p>Câu trả lời đúng: ${correctOptions[i]}</p>
    `;
    if (userAnswers[i] === correctOptions[i]) {
        div.classList.add('correct');
    } else {
        div.classList.add('incorrect');
    }
    answersContainer.appendChild(div);
}

function showAnswers() {
    answersContainer.style.display = 'block';
}

document.getElementById("backToWelcome").addEventListener("click", function() {
    window.location.href = "welcome.html";
});
  