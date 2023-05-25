const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const button = document.getElementById('calculate-button');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');

const yearsText = document.getElementById('years');
const monthsText = document.getElementById('months');
const daysText = document.getElementById('days');

const ERROR_MESSAGES = {
  fieldRequired: 'This field is required',
  invalidDay: 'Must be a valid day',
  invalidMonth: 'Must be a valid month',
  invalidYear: 'Must be a valid year',
};

function resetErrors() {
  dayError.innerText = null;
  monthError.innerText = null;
  yearError.innerText = null;
}

function resetBirthday() {
  daysText.innerText = '--';
  monthsText.innerText = '--';
  yearsText.innerText = '--';
}

function validateInputs(day, month, year) {
  resetErrors();

  if (!day) dayError.innerText = ERROR_MESSAGES.fieldRequired;
  if (!month) monthError.innerText = ERROR_MESSAGES.fieldRequired;
  if (!year) yearError.innerText = ERROR_MESSAGES.fieldRequired;

  if (day > 31 || (day < 1 && day !== ''))
    dayError.innerText = ERROR_MESSAGES.invalidDay;
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
    dayError.innerHTML = ERROR_MESSAGES.invalidDay;
  if (month == 2 && day > 28) dayError.innerHTML = ERROR_MESSAGES.invalidDay;
  if (month > 12 || (day < 1 && day !== ''))
    monthError.innerText = ERROR_MESSAGES.invalidMonth;
  if (year > new Date().getFullYear() || (year < 1 && year != ''))
    yearError.innerText = ERROR_MESSAGES.invalidYear;
}

function calculateAge(day, month, year) {
  validateInputs(dayInput.value, monthInput.value, yearInput.value);

  const today = new Date();

  let tDay = today.getDate();
  let tMonth = today.getMonth();
  let tYear = today.getFullYear();

  if (tDay < day) {
    daysText.innerText = tDay - day + 30;
    tMonth -= 1;
  } else {
    daysText.innerText = tDay - day;
  }

  if (tMonth < month) {
    monthsText.innerText = tMonth - month + 12;
    tYear -= 1;
  } else {
    monthsText.innerText = tMonth - month;
  }

  yearsText.innerText = tYear - year;
}

button.addEventListener('click', () =>
  calculateAge(
    parseInt(dayInput.value),
    parseInt(monthInput.value),
    parseInt(yearInput.value)
  )
);
