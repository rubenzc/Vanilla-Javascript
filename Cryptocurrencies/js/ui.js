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
                console.log(coins);
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

}