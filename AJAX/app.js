//EVENT LISTENERS
document.getElementById('load').addEventListener('click', loadData);


//FUNCTIONS

function loadData(){

    //Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //Open connection(method, url, asynchronous)
    xhr.open('GET', 'data.txt', true);

    //When page load
    xhr.onload = function(){
        // 200: Right; 403: Forbidden; 404: Not found
        //this references to XMLHttpRequest connection
        if(this.status === 200) {
            document.getElementById('list').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    //Send request
    xhr.send();
}

// Older method

function loadData(){

    //Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //Open connection(method, url, asynchronous)
    xhr.open('GET', 'data.txt', true);

    xhr.onreadystatechange = function (){

        console.log(`State: ${this.readyState}`);

        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    //Ready status
    /*
    0 - Not init
    1 - Ready connection
    2 - Received
    3 - Processing...
    4 - Ready answer
    */

    //Send request
    xhr.send();
}