class Insurance {
    // Insurance constructor
    constructor(brand, year, type) {
        this.brand = brand;
        this.year = year;
        this.type = type;
    }

    quoteInsurance() {
        // 1 = American 1.15
        // 2 = Asian 1.05
        // 3 = European 1.35
        let quantity;
        const base = 2000;
    
        switch(this.brand) {
            case '1':
                quantity = base * 1.15;
                break;
            case '2':
                quantity = base * 1.05;
                break;
            case '3':
                quantity = base * 1.35;
                break;
        }
    
        //Read year. Older -> Cheaper
        const diference = new Date().getFullYear() - this.year;
        //Each yar reduce 3% the insurance value
        quantity -= ((diference * 3) * quantity) / 100;
    
        // Basic insurance = * 30%
        // Basic insurance = * 50%
        if(this.type === 'basic') {
            quantity *= 1.30;
        } else {
            quantity*= 1.50;
        }
    
        return quantity;
    }
}

class Interface{
    //Message to print
    showMessage(message, type) {
        const div = document.createElement('div');
    
        if (type === 'error') {
            div.classList.add('message', 'error');
        } else {
            div.classList.add('message', 'success');
        }
        div.innerHTML = `${message}`;
        //(Which element you want to insert, before which element you want to insert)
        form.insertBefore(div, document.querySelector('.form-group'));
    
        setTimeout(function(){
            document.querySelector('.message').remove();
        }, 3000);
    }

    showResult(insurance, total) {
        const result = document.getElementById('result');
        let brand;
        switch(insurance.brand) {
            case '1':
                brand = 'American';
                break;
            case '2':
                brand = 'Asian';
                break;
            case '3':
                brand = 'European';
                break;
        }
        const div = document.createElement('div');
        //Show info
        div.innerHTML = `
            <p class='header'>Your resume: </p>
            <p>Brand: ${brand}</p>
            <p>Year: ${insurance.year}</p>
            <p>Type: ${insurance.type}</p>
            <p>Total: ${total}</p>
        `;
    
        const spinner = document.querySelector('#loading img');
        spinner.style.display = 'block';
        setTimeout (function(){
            spinner.style.display = 'none';
            result.appendChild(div);
        }, 2500);
    
    }
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

    //Create an Interface instance
    const interface = new Interface();

    //Check nt empty fields
    if(selectedBrand === '' || selectedYear === '' || type === '') {
        
        //Show error will be a prototype from Interface
        interface.showMessage('Missing data! Please check the form and try again', 'error');
    } else {
        // Clean last results
        const result = document.querySelector('#result div');
        if(result !=null) {
            result.remove();
        }

        //Instance insurance & show interface
        const insurance = new Insurance(selectedBrand, selectedYear, type);
        // Quote the insurance
        const quantity = insurance.quoteInsurance();
        //Show result
        interface.showResult(insurance, quantity);
        interface.showMessage('Quoting...', 'success');
    }

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