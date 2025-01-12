const form = document.querySelector("form");
// this usecase will give you empty
// const heigth = parseInt(document.querySelector("#height").value);
// const weight = parseInt(document.querySelector("#weight").value);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const heigth = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (heigth === "" || heigth < 0 || isNaN(heigth)) {
    results.innerHTML = `Plese give a valid height ${heigth}`;
  }
  // results.innerHTML = `${heigth}`;
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Plese give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((heigth * heigth) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
