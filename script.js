const inputTemp = document.getElementById('inputTemp');
const displayAnswer = document.getElementById('display');
const toFarenheit = document.getElementById('celsiusToFarenheit');
const toCelsius = document.getElementById('farenheitToCelsius');
const submitBtn = document.querySelector('button');

inputTemp.value = ''

function convert(temp) {

temp = Number(temp);
  if (toFarenheit.checked) {
    tempF = ((temp * 9/5) + 32).toFixed(1) + " °F";
    return tempF
  }
  else if (toCelsius.checked) {
    tempC = ((temp -32) / (9/5)).toFixed(1) + " °C";
    return tempC
  }
}

submitBtn.onclick = () => {
  displayAnswer.textContent = convert(inputTemp.value)
}








