//EVENT LISTENERS
const button1 = document.getElementById('button1').addEventListener('click', ajaxCall);

//FUNCTIONS

function ajaxCall(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employee.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            //Convert chain text in real object
            const person = JSON.parse(this.responseText);

            const htmlTemplate = `
            <ul>
                <li>Id: ${person.id}</li>
                <li>Name: ${person.name}</li>
                <li>Company: ${person.company}</li>
                <li>Job: ${person.job}</li>
            </ul>
            `;
            document.getElementById('employee').innerHTML = htmlTemplate;
        }
    }

    xhr.send();

}

const button2 = document.getElementById('button2');
button2.addEventListener('click', function(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'employees.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            //Convert chain text in real object
            const staff = JSON.parse(this.responseText);

            let htmlTemplate = '';
            staff.forEach(function(person){
                htmlTemplate += `
                <ul>
                    <li>Id: ${person.id}</li>
                    <li>Name: ${person.name}</li>
                    <li>Company: ${person.company}</li>
                    <li>Job: ${person.job}</li>
                </ul>
                `;
            })
            document.getElementById('employees').innerHTML = htmlTemplate;

        }
    }

    xhr.send();

})