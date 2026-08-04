document.addEventListener("DOMContentLoaded", () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function runCounters() {
        const statsSection = document.getElementById('dados');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !animated) {
            statNumbers.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const speed = target / 50; 

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            animated = true;
        }
    }

    window.addEventListener('scroll', runCounters);

    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.style.color = "#2e7d32";
            formFeedback.innerText = "✓ Mensagem enviada com sucesso! Obrigado pelo contato.";
            contactForm.reset();
        });
    }
});

function calcularImpacto() {
    const hectaresInput = document.getElementById('hectares');
    const resultBox = document.getElementById('resultBox');

    const hectares = parseFloat(hectaresInput.value);

    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    const economiaAgua = (hectares * 0.45).toFixed(2);
    const reducaoCarbono = (hectares * 1.2).toFixed(1);
    const insumosOtimizados = Math.round(hectares * 35);

    document.getElementById('resAgua').innerText = economiaAgua;
    document.getElementById('resCarbono').innerText = reducaoCarbono;
    document.getElementById('resAdubo').innerText = insumosOtimizados;

    resultBox.classList.remove('hidden');
}

