//Instance API &UI classess
const quote = new API('1a880a0ee5b2c8dc5555bf5cd447837aa1908d5e04e9f241b74687b11fa0f624');
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