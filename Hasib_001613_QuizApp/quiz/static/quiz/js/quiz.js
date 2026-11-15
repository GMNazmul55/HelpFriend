document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quizForm');
  if (!form) return;

  const cards = Array.from(form.querySelectorAll('.question-card'));
  if (!cards.length) return;

  const previous = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const submit = document.getElementById('submitBtn');
  const counter = document.getElementById('questionCounter');
  const answered = document.getElementById('answeredCount');
  const progress = document.getElementById('quizProgress');
  const fill = document.getElementById('progressBar');
  const error = document.getElementById('answerError');
  let current = 0;

  const hasAnswer = card => Boolean(card.querySelector('input[type="radio"]:checked'));

  function update() {
    cards.forEach((card, index) => card.classList.toggle('active', index === current));
    counter.textContent = `Question ${current + 1} of ${cards.length}`;
    answered.textContent = `${cards.filter(hasAnswer).length} of ${cards.length} answered`;
    progress.setAttribute('aria-valuenow', String(current + 1));
    fill.style.width = `${((current + 1) / cards.length) * 100}%`;
    previous.hidden = current === 0;
    next.hidden = current === cards.length - 1;
    submit.hidden = current !== cards.length - 1;
    error.hidden = true;
  }

  function requireAnswer() {
    error.textContent = 'Please select an answer before continuing.';
    error.hidden = false;
    const radio = cards[current].querySelector('input[type="radio"]');
    if (radio) radio.focus();
  }

  form.classList.add('quiz-ready');
  form.noValidate = true;
  document.getElementById('quizProgressHeader').hidden = false;
  progress.hidden = false;
  update();

  next.addEventListener('click', () => {
    if (!hasAnswer(cards[current])) {
      requireAnswer();
      return;
    }
    if (current < cards.length - 1) current += 1;
    update();
  });

  previous.addEventListener('click', () => {
    if (current > 0) current -= 1;
    update();
  });

  form.addEventListener('change', () => update());

  form.addEventListener('submit', event => {
    const missing = cards.findIndex(card => !hasAnswer(card));
    if (missing !== -1) {
      event.preventDefault();
      current = missing;
      update();
      requireAnswer();
      return;
    }
    submit.disabled = true;
    submit.textContent = 'Submitting…';
  });
});
