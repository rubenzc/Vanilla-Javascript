//Import class Client
import { Client } from './client.js';

//Export variables
export const businessName = 'Dev Company';
export let saving = 30000000;
export let category = 'Learning';

//Export functions
export function showInfo(name, saving, category) {
    return `Client: ${name} - Saving: ${saving} - Category: ${category}`;
}
export function showName(name) {
    return `Client: ${name}`;
}

//Use Cient class module

export class Business extends Client {
    constructor(businessName, saving, category) {
        super(businessName, saving);
        this.category = category;
    }
    showInfo() {
        return `Client: ${this.name} - Saving: ${this.saving} - Category: ${this.category}`
    }
}