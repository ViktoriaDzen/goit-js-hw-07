// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input) підставляє його поточне значення в span#name-output як ім’я для
// привітання. Обов’язково очищай значення в інпуті по краях від пробілів
// методом trim(). Якщо інпут порожній або містить лише пробіли, то замість
// імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// Вимоги

// На елементі input#name-input прослуховується подія input.
// Під час набору тексту в інпуті його поточне значення підставляється в
//  span#name-output як ім'я для привітання.
// Значення в інпуті очищене від пробілів по краях.
// Якщо інпут порожній або містить лише пробіли, замість імені у спан
// підставляється рядок "Anonymous".

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', () => {
  const name = input.value.trim();
  if (name === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = name;
  }
});
