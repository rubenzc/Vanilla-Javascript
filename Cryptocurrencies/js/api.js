class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    //Get all the coins
    async getApiCoins () {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
        
        //Fetch to url
        const urlGetCoins = await fetch(url);

        //Answer in JSON
        const coins = await urlGetCoins.json();

        return {coins};
    
    }

    //Get coins and crytocurrencies value
    async getValues(coin, cryptocurrencie) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrencie}&tsyms=${coin}&api_key=${this.apiKey}`;

        //Query in REST API
        const urlConvert = await fetch(url);

        const result = await urlConvert.json();

        return {result}

    }
}