function getBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = weight / height ** 2;

  return bmi;
}

function getStatus(bmi) {
  let status;
  if (bmi <= 18.4) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal";
  } else if (bmi >= 25.0 && bmi <= 39.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }
  return status;
}
function displayRes() {
  let bmi = getBMI();
  let status = getStatus(bmi);

  document.getElementById("bmi").innerText = bmi.toFixed(2);

  document.getElementById("status").innerText = status;

  document.getElementsByClassName("results-cont")[0].style.display = "block";
}
