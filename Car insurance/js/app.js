// Quote constructor

// Function Insurance() {

// }

//Actual year is max
const max = new Date().getFullYear(),
      min = max -20;
      console.log(max);

const selectYears = document.getElementById('year');

//Fill Year Select (From year to -20 years)
for (let i = min; i < max; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYears.appendChild(option)
}