class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    //Get all the coins
    async getApiCoins () {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
        
        //Fetch a la url
        const urlGetCoins = await fetch(url);

        //Answer in JSON
        const coins = await urlGetCoins.json();

        console.log(coins);

        return {coins};
    
    }
}