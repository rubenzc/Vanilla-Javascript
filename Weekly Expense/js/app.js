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

    //Insert expenses to list
    addExpenseList(name, quantity) {
        const expensesList = document.querySelector('#expenses ul');
        //Create a li
        const li = document.createElement('li');
        li.className ='list-group-item d-flex justify-content-between align-items-center';
        //Insert the expense
        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${quantity}</span>
        `;
        //Insert to html
        expensesList.appendChild(li);
    }

    //Check remaining budget
    remainingBudget(quantity) {
        const remaining = document.querySelector('span#remaining');
        //Update reamining budget. remainingBudget references to method inside Budget class
        const remainingBudgetUser = budgetQuantity.remainingBudget(quantity);
        remaining.innerHTML = `${remainingBudgetUser}`;

        //Call to function to change colors
        this.checkBudget();
    }

    //Change color remaining budget
    checkBudget() {
        const budgetTotal = budgetQuantity.budget;
        const remainingBudget = budgetQuantity.remaining;

        //Check 25% expenses
        if((budgetTotal / 4) > remainingBudget ){
            const remaining = document.querySelector('.remaining');
            remaining.classList.remove('alert-success', 'alert-warning');
            remaining.classList.add('alert-danger');
        } else if ((budgetTotal / 2) > remainingBudget){
            const remaining = document.querySelector('.remaining');
            remaining.classList.remove('alert-success');
            remaining.classList.add('alert-warning');
        }

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
        //Right message
        ui.printMessage('Correctly added', 'right');
        //Add expenses to list
        ui.addExpenseList(expenseName, expenseQuantity);
        //Remaining budget
        ui.remainingBudget(expenseQuantity);
    }
})