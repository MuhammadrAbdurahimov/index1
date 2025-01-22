// Получаем элементы DOM
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const generateButton = document.getElementById('generateButton');
const resultText = document.getElementById('result');

// Функция для генерации случайного числа
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Обработчик события для кнопки
generateButton.addEventListener('click', () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  // Проверка на корректность ввода
  if (isNaN(min) || isNaN(max)) {
    resultText.textContent = 'Пожалуйста, введите числа!';
    resultText.style.color = 'red';
  } else if (min >= max) {
    resultText.textContent = 'Минимальное число должно быть меньше максимального!';
    resultText.style.color = 'red';
  } else {
    const randomNumber = generateRandomNumber(min, max);
    resultText.textContent = `Случайное число: ${randomNumber}`;
    resultText.style.color = '#4CAF50';
  }
});;