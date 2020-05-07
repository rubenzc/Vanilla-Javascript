//app.js is the main file and it requires from other files when is needed

import { clientName, saving, showInfo, showName, Client } from './client.js';
import { businessName, saving as businessSaving, category, showInfo as businessInfo, Business } from './business.js';
//If you want to import all data from file you can use an alias. Devuelve un módulo como símbolo
// import * as client from './client.js';

//Variables
console.log(clientName);
console.log(saving);

console.log(businessName);
console.log(businessSaving);
console.log(category);

//Functions
const info = showInfo(clientName, saving);
console.log(info);

const businessData = businessInfo(businessName, businessSaving, category);
console.log(businessData);

const name = showName(clientName);
console.log(name);

//Classes
let client = new Client(clientName, saving);
console.log(client);
console.log(client.showInfo());

let business = new Business(businessName, businessSaving, category);
console.log(business);
console.log(business.showInfo());
