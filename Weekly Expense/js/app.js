//Variables
const userBudget = prompt('Which is your weekly budget?');
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


//Event listeners

document.addEventListener('DOMContentLoaded', function(){
    if(userBudget === null || userBudget === '') {
        window.location.reload();
    } else {
        //Instance a new budget
        budgetQuantity = new Budget(userBudget);
        console.log(budgetQuantity);
    }
});