const riverData = [
  {
    title: 'Rio de montanha',
    badge: 'Curso rápido',
    description:
      'Esse tipo de rio nasce em áreas elevadas e costuma ter correnteza forte, grande velocidade e capacidade de erosão.',
  },
  {
    title: 'Rio de planície',
    badge: 'Curso lento',
    description:
      'Nos terrenos baixos, o rio percorre distâncias maiores com velocidade menor, formando meandros e várzeas.',
  },
  {
    title: 'Rio temporário',
    badge: 'Sazonal',
    description:
      'Esse rio pode secar em épocas de pouca chuva. Ele é comum em regiões áridas ou semiáridas.',
  },
  {
    title: 'Rio permanente',
    badge: 'Água o ano todo',
    description:
      'Os rios permanentes mantêm água durante todo o ano, pois recebem aporte constante de chuva ou de nascentes.',
  },
];

const cardsContainer = document.getElementById('riverCards');

riverData.forEach((river) => {
  const card = document.createElement('article');
  card.className = 'river-card';
  card.innerHTML = `
    <span class="badge">${river.badge}</span>
    <h3>${river.title}</h3>
    <p>${river.description}</p>
  `;
  cardsContainer.appendChild(card);
});

const optionButtons = document.querySelectorAll('.option-btn');
const feedback = document.getElementById('answerFeedback');

optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isCorrect = button.dataset.correct === 'true';

    optionButtons.forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove('correct', 'wrong');

      if (btn.dataset.correct === 'true') {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      feedback.textContent = 'Correto! Os rios de montanha geralmente têm curso mais rápido e erosivo.';
      feedback.style.color = '#16a34a';
    } else {
      feedback.textContent = 'Não foi dessa vez. A resposta correta é: rio de montanha.';
      feedback.style.color = '#dc2626';
      button.classList.add('wrong');
    }
  });
});
