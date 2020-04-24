// Quote constructor

function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

function Interface() {

}

//EVENT LISTENERS

const form = document.getElementById('quote-insurance');

form.addEventListener('submit', function(e){
    e.preventDefault();

    //Get brand selected from an option
    const brand = document.getElementById('brand');
    const selectedBrand = brand.options[brand.selectedIndex].value;

    //Get the year selected
    const year = document.getElementById('year');
    const selectedYear = year.options[year.selectedIndex].value;

    //Get the Car Insurance Type from radio button
    const type = document.querySelector('input[name="type"]:checked').value;

    console.log(selectedBrand);
    console.log(selectedYear);
    console.log(type);
});



//Actual year is max
const max = new Date().getFullYear(),
      min = max -20;

const selectYears = document.getElementById('year');
//Fill Year Select (From year to -20 years)
for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    //Change the content of an HTML element
    option.innerHTML = i;
    selectYears.appendChild(option);
}