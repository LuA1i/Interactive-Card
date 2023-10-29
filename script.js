const cardNumber = document.getElementById('number')
const numberInp = document.querySelector('.number')

const cardName = document.getElementById('name')
const nameInp = document.querySelector('.name')

const cardMonth = document.getElementById('card_month')
const monthInp = document.querySelector('.month')

const cardYear = document.getElementById('card_year')
const yearInp = document.querySelector('.year')

const cardCvc = document.querySelector('.cvc')
const cvcInp = document.querySelector('.cvc_num')

const submitBtn = document.querySelector('.btn_submit')
const continueBtn = document.querySelector('.continue')

const completed = document.querySelector('.completed')
const form = document.querySelector('.input_form')

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value)
}

function setCardName(e) {
  cardName.innerText = e.target.value
}

function setCardMonth(e) {
  cardMonth.innerText = e.target.value
}

function setCardYear(e) {
  cardYear.innerText = e.target.value
}

function setCardCvc(e) {
  cardCvc.innerText = e.target.value
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, '$& ')
}

function handleSubmit(e) {
  e.preventDefault()
  if (!nameInp.value) {
    nameInp.classList.add('error')
    nameInp.parentElement.classList.add('error_message')
  } else {
    nameInp.classList.remove('error')
    nameInp.parentElement.classList.remove('error_message')
  }
  if (!numberInp.value) {
    numberInp.classList.add('error')
    numberInp.parentElement.classList.add('error_message')
  } else {
    numberInp.classList.remove('error')
    numberInp.parentElement.classList.remove('error_message')
  }
  if (!monthInp.value) {
    monthInp.classList.add('error')
    monthInp.parentElement.classList.add('error_message')
  } else {
    monthInp.classList.remove('error')
    monthInp.parentElement.classList.remove('error_message')
  }
  if (!yearInp.value) {
    yearInp.classList.add('error')
    yearInp.parentElement.classList.add('error_message')
  } else {
    yearInp.classList.remove('error')
    yearInp.parentElement.classList.remove('error_message')
  }
  if (!cvcInp.value) {
    cvcInp.classList.add('error')
    cvcInp.parentElement.classList.add('error_message')
  } else {
    cvcInp.classList.remove('error')
    cvcInp.parentElement.classList.remove('error_message')
  }

  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value
  ) {
    completed.classList.remove('hidden') // Remove the "hidden" class
    form.classList.add('hidden') // Add the "hidden" class
  }
}

continueBtn.addEventListener('click', function () {
  completed.classList.add('hidden')
  form.classList.remove('hidden')
})

numberInp.addEventListener('keyup', setCardNumber)

nameInp.addEventListener('keyup', setCardName)

monthInp.addEventListener('keyup', setCardMonth)

yearInp.addEventListener('keyup', setCardYear)

cvcInp.addEventListener('keyup', setCardCvc)
submitBtn.addEventListener('click', handleSubmit)
