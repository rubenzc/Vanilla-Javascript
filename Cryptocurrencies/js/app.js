//Instance UI Classes
const ui = new Interface();


//Read the form

const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Read selected coin 
    const coinSelect = document.querySelector('#coin');
    const selectedCoin = coinSelect.options[coinSelect.selectedIndex].value;

    //Read selected cryptocurrencie 
    const cryptocurrencieSelect = document.querySelector('#cryptocurrencie');
    const selectedCryptocurrencie = cryptocurrencieSelect.options[cryptocurrencieSelect.selectedIndex].value;

    //Check if the fields are not empty
    if( selectedCoin === '' || selectedCryptocurrencie === '' ) {
        ui.showMessage('Both fields are mandatory!', 'alert bg-danger text-center');
        //Show error alert
    } else {
        //Ok! Let's check API
        console.log('All right!');
    }
})