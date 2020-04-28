document.querySelector('#generate-name').addEventListener('submit', loadNames);
 
//Call to Ajax & print results
function loadNames(e){
    e.preventDefault();

    //Read variables
    const origin = document.getElementById('origin');
    const originSelected = origin.options[origin.selectedIndex].value
 
    const gender = document.getElementById('gender');
    const genderSelected = gender.options[gender.selectedIndex].value;
 
    const quantity =  document.getElementById('number').value;
 
    let url = '';
    url += 'https://randomuser.me/api?';
    //If origin, add to url
    if(originSelected !== ''){
        url += `nat=${originSelected}&`;
    }

    if(genderSelected !== ''){
        url += `gender=${genderSelected}&`;
    }

    if(quantity !== ''){
        url += `results=${quantity}&`;
    }

    //Connect to AJAX
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse(this.responseText).results;

            let htmlNames = '<h2>Names generated</h2>'
        
            htmlNames +='<ul class="list">';
            //Print each name
            names.forEach(name => {
                htmlNames += `
                    <li>${name.name.first}</li>
                `;
            });
 
            htmlNames += '</ul>'
 
            document.getElementById('result').innerHTML = htmlNames
        }
    };
    xhr.send()
}