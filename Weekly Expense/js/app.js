//Variables
const userBudget = prompt('Which is your weekly budget?');
const form = document.getElementById('add-expense');
let budgetQuantity;


//Classes

//Budget class
class Budget {
    //Inside constructor because we got it from prompt
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
    }
    //Method to subtract from current budget
    remainingBudget(quantity = 0) {
        return this.remaining -= Number(quantity);
    }

}

class Interface {
    insertBudget(quantity) {
        const budgetSpan = document.querySelector('span#total');
        const remainingSpan = document.querySelector('span#remaining');

        //Insert to HTML
        budgetSpan.innerHTML = `${quantity}`;
        remainingSpan.innerHTML = `${quantity}`;
    }

    printMessage(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');
        if(type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }
        divMessage.appendChild(document.createTextNode(message));
        //Insert to DOM
        document.querySelector('.primary').insertBefore(divMessage, form);
        //Show message 3"
        setTimeout(function(){
            document.querySelector('.primary .alert').remove();
            form.reset();
        }, 3000);
    }
}


//Event listeners

document.addEventListener('DOMContentLoaded', function(){
    //Check Prompt content
    if(userBudget === null || userBudget === '') {
        window.location.reload();
    } else {
        //Instance a new Budget
        budgetQuantity = new Budget(userBudget);

        //Instance Interface class
        const ui = new Interface();
        ui.insertBudget(budgetQuantity.budget);
    }
    
});
//Add button
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Read from expenses form
    const expenseName = document.querySelector('#expense').value;
    const expenseQuantity = document.querySelector('#quantity').value;

    //Instance Interface
    const ui = new Interface();
    if(expenseName === '' || expenseQuantity === '') {
        //Parameters(message, type)
        ui.printMessage('There is a mistake', 'error');
    } else {
        //Insert into HTML
    }
})