const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


const quizData = {
    question: "Qual técnica agrícola integra árvores, pasto e cultivo numa mesma área de forma sustentável?",
    options: [
        "Monocultura intensiva tradicional",
        "Integração Lavoura-Pecuária-Floresta (ILPF)",
        "Cultivo convencional com queimadas"
    ],
    correct: 1,
    explanation: "Parabéns! A ILPF ajuda no conforto térmico dos animais, recupera o solo e absorve carbono."
};

const questionEl = document.getElementById('quiz-question');
const optionsContainer = document.getElementById('quiz-options');
const feedbackEl = document.getElementById('quiz-feedback');

function loadQuiz() {
    questionEl.innerText = quizData.question;
    optionsContainer.innerHTML = "";
    
    quizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('quiz-option');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, clickedButton) {
    const allOptions = document.querySelectorAll('.quiz-option');
    
    allOptions.forEach(btn => btn.disabled = true);

    if (selectedIndex === quizData.correct) {
        clickedButton.classList.add('correct');
        feedbackEl.innerText = quizData.explanation;
        feedbackEl.style.color = "#155724";
    } else {
        clickedButton.classList.add('wrong');
        allOptions[quizData.correct].classList.add('correct');
        feedbackEl.innerText = "Resposta incorreta. A alternativa certa seria ILPF.";
        feedbackEl.style.color = "#721c24";
    }
    feedbackEl.style.display = "block";
}

loadQuiz();


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Obrigado pelo seu contacto! O formulário foi enviado com sucesso.');
    this.reset();
});

