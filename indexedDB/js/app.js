let DB;

//Interface selectors

const form = document.querySelector('form'),
      petName = document.querySelector('#pet'),
      clientName = document.querySelector('#client'),
      phone = document.querySelector('#phone'),
      date = document.querySelector('#date'),
      hour = document.querySelector('#hour'),
      symptoms = document.querySelector('#symptoms'),
      appointments = document.querySelector('#appointments'),
      headingManage = document.querySelector('#manage');


//WaitDOM Ready

document.addEventListener('DOMContentLoaded', () => {
    //Create Data base (name, version)
    let createDB = window.indexedDB.open('appointments', 1);

    //If error exists, send it to console
    createDB.onerror = function () {
        console.log('There is a error');
    }
    //If OK, show it in console and assign data base
    createDB.onsuccess = function(){

        //Asign to data base
        DB = createDB.result;
        showAppointments();
    }

    //This method only runs once and is great to create the Schema
    createDB.onupgradeneeded = function(e) {
        //The event is the Data base
        let db = e.target.result

        //Define objectstore. 2 parameters (Data base name and options)
        //keypath is the data base index. Autoincrement, similar to sql
        let objectstore = db.createObjectStore('appointments', { keyPath: 'key', autoIncrement: true});

        //Create index and database fields. createIndex, 3 parameters (name, keypath and options)
        //Creating DB fields
        objectstore.createIndex('pet', 'pet', { unique: false });
        objectstore.createIndex('client', 'client', { unique: false });
        objectstore.createIndex('phone', 'phone', { unique: false });
        objectstore.createIndex('date', 'date', { unique: false });
        objectstore.createIndex('hour', 'hour', { unique: false });
        objectstore.createIndex('symptoms', 'symptoms', { unique: false });

    }

    form.addEventListener('submit', addData);

    function addData(e) {
        e.preventDefault();

        const newDate = {
            pet: petName.value,
            client: clientName.value,
            phone: phone.value,
            date: date.value,
            hour: hour.value,
            symptoms: symptoms.value

        }

        //INDEXED DB transactions
        let transaction = DB.transaction(['appointments'], 'readwrite');
        let objectStore = transaction.objectStore('appointments');
        let request = objectStore.add(newDate);

        console.log(request);

        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Added appointment');
            showAppointments();
        }
        transaction.onerror = () => {
            console.log('Error!');
        }

    }

    function showAppointments() {
        //Clear last appointments
        while(appointments.firstChild) {
            appointments.removeChild(appointments.firstChild);
        }

        //Create an objectStore
        let objectStore = DB.transaction('appointments').objectStore('appointments');

        //Returns a request
        objectStore.openCursor().onsuccess = function(e) {
            //Cursor is located in the register indicated to access the data
            let cursor = e.target.result;

            if(cursor) {
                let appointmentHTML = document.createElement('li');
                appointmentHTML.setAttribute('data-appointment-id', cursor.value.key);
                appointmentHTML.classList.add('list-group-item');

                appointmentHTML.innerHTML = `
                    <p class="font-weight-bold">Pet: <span class="font-weight-normal">${cursor.value.pet}</span></p>
                    <p class="font-weight-bold">Client name: <span class="font-weight-normal">${cursor.value.client}</span></p>
                    <p class="font-weight-bold">Phone: <span class="font-weight-normal">${cursor.value.phone}</span></p>
                    <p class="font-weight-bold">Date: <span class="font-weight-normal">${cursor.value.date}</span></p>
                    <p class="font-weight-bold">Hour: <span class="font-weight-normal">${cursor.value.hour}</span></p>
                    <p class="font-weight-bold">symptoms: <span class="font-weight-normal">${cursor.value.symptoms}</span></p>
                    
                `;
                appointments.appendChild(appointmentHTML);

                cursor.continue();

            }
            
        }
    }

})