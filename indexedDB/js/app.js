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

        console.log('BBDD ready');

    }

})