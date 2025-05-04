function checkAnswer() {
    let answers = document.getElementsByName("answer");
    let selectedAnswer = "";
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            selectedAnswer = answers[i].value;
            break;
        }
    }
    let resultText = "";
    if (selectedAnswer === "იუპიტერი") {
        resultText = "სწორია! იუპიტერი ყველაზე დიდი პლანეტაა. ✅";
    } else if (selectedAnswer === "") {
        resultText = "გთხოვთ, აირჩიოთ პასუხი!";
    } else {
        resultText = "არასწორია. სცადეთ კიდევ ერთხელ. ❌";
    }
    document.getElementById("result").textContent = resultText;
}
