class Interface {

    constructor() {
        this.init();
    }

    init() {
        this.buildSelect();
    }

    buildSelect() {
        //Call to API (Method fron API class)
        quote.getApiCoins()
            .then(coins => {
                //Create a select with api option
                const select = document.querySelector('#cryptocurrencie');
                //Pass key obligatorily to acces to value to iterate the api results
                for ( const [key, value] of Object.entries(coins.coins.Data)) {
                    //Add Symbol and name as options
                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(option);
                }

            })
    }

    showMessage (message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        //Select messages
        const divMessage = document.querySelector('.messages');
        divMessage.appendChild(div);

        //Show content
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    //Print quote result
    //3 parameters because of API needs
    printResult(result, coin, crypto) {

        const dataCoin = result[crypto][coin];

        //Short digits
        let price = dataCoin.PRICE.toFixed(2),
            percentage = dataCoin.CHANGEPCTDAY.toFixed(2),
            lastUpdate = new Date(dataCoin.LASTUPDATE * 1000).toLocaleDateString();
            

        //Build the template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Result:</h2>
                    <p>The price of ${dataCoin.FROMSYMBOL} to ${dataCoin.TOSYMBOL} is: ${price}</p>
                    <p>Last oscilation: % ${percentage}</p>
                    <p>Last update: ${lastUpdate}</p>
                </div>
            
            
            </div>
        `;

        //Insert the result
        document.querySelector('#result').innerHTML = templateHTML;

    }

}