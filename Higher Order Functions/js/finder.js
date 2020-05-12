// Create years
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  imu = max - 10;

for(let i = max; i >  imu; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}


function getCars() {
    return [
        {
            brand: 'BMW',
            model: 'Serie 3',
            year: 2012,
            price: 30000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A4', year: 2018, price: 40000, doors: 4, color: 'Black', transmission: 'automatic' },
        {
            brand: 'Ford',
            model: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            color: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A6', year: 2010, price: 35000, doors: 4, color: 'Black', transmission: 'automatic' },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2016,
            price: 70000,
            doors: 4,
            color: 'Red',
            transmission: 'automatic'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2015,
            price: 25000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        {
            brand: 'Chevrolet',
            model: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            color: 'Red',
            transmission: 'manual'
        },
        { brand: 'Ford', model: 'Mustang', year: 2019, price: 80000, doors: 2, color: 'Red', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2017,
            price: 40000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A3', year: 2017, price: 55000, doors: 2, color: 'Black', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2012,
            price: 25000,
            doors: 2,
            color: 'Red',
            transmission: 'manual'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 45000,
            doors: 4,
            color: 'Blue',
            transmission: 'automatic'
        },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2019,
            price: 90000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { brand: 'Ford', model: 'Mustang', year: 2017, price: 60000, doors: 2, color: 'Black', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            color: 'Blue',
            transmission: 'automatic'
        },
        {
            brand: 'BMW',
            model: 'Serie 3',
            year: 2018,
            price: 50000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2017,
            price: 80000,
            doors: 4,
            color: 'Black',
            transmission: 'automatic'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 40000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { brand: 'Audi', model: 'A4', year: 2016, price: 30000, doors: 4, color: 'Blue', transmission: 'automatic' }
    ];
}

//Data Search
//Similar to React state
let dataSearch = {
    brand : '',
    year : '',
    min : '',
    max : '',
    doors : '',
    transmission : '',
    color: ''
}


//DOM Loaded Event listeners
const cars = getCars();

document.addEventListener('DOMContentLoaded', () => {
    showCars(cars);
});

//Form Event listeners
const brand = document.querySelector('#brand');
brand.addEventListener('input', e => {
    dataSearch.brand = e.target.value;

    //Call to filter cars function
    filterCar();
})
const year = document.querySelector('#year');
year.addEventListener('input', e => {
    //Convert to Number
    dataSearch.year = Number(e.target.value);

    //Call to filter cars function
    filterCar();
})
const minimun = document.querySelector('#min');
minimun.addEventListener('input', e => {
    //Convert to Number
    dataSearch.min = Number(e.target.value);
    filterCar();
})
const maximun = document.querySelector('#max');
maximun.addEventListener('input', e => {
    //Convert to Number
    dataSearch.max = Number(e.target.value);
    filterCar()
})


function showCars(cars) {
    
    //Read Result element
    const container = document.querySelector('#result');

    //Crear last results
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //Build HTML results
    cars.forEach(car => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `
            <p>${car.brand} ${car.model} - ${car.year} - ${car.doors} Doors - Transmission: ${car.transmission} - Price: $ ${car.price} - Color: ${car.color}</p>
        `;
        container.appendChild(carHTML);
    })

}

function filterCar() {
    const result = getCars().filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax);

    if(result.length) {
        showCars(result);
    } else {
        alert('No results');
    }
}

function filterBrand(car) {
    if(dataSearch.brand) {
        return car.brand === dataSearch.brand;
    } else {
        return car;
    }
}

function filterYear(car) {
    if(dataSearch.year) {
        return car.year === dataSearch.year;
    } else {
        return car;
    }
}

function filterMin(car) {
    if(dataSearch.min) {
        return car.price >= dataSearch.min;
    } else {
        return car;
    }
}

function filterMax(car) {
    if(dataSearch.min) {
        return car.price <= dataSearch.max;
    } else {
        return car;
    }
}