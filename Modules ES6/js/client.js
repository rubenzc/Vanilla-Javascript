//Export variables
export const clientName = 'Ru';
export let saving = 300;

//Export functions
export function showInfo(name, saving) {
    return `Client: ${name} - Saving: ${saving}`;
}
export function showName(name) {
    return `Client: ${name}`;
}

//Export classes
export class Client {
    constructor (name, saving) {
        this.name = name;
        this.saving = saving;
    }
    showInfo() {
        return `Client: ${this.name} - Saving: ${this.saving}`;
    }
}
