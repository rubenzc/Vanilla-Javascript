//VARIABLES

const cart = document.getElementById('cart');
const courses = document.getElementById('courses-list');
const coursesList = document.querySelector('#cart-list tbody');
const btnEmpty = document.getElementById('empty-cart');

//EVENT LISTENERS

loadEventListeners();

function loadEventListeners() {
    //Trigeer when "Add cart"
    courses.addEventListener('click', buyCourse);
    //Trigger when remove course from cart
    cart.addEventListener('click', removeCourse);
    //Trigger to quit all courses from cart
    btnEmpty.addEventListener('click', emptyCart);
    //Charge document show local storage
    document.addEventListener('DOMContentLoaded', readLocalStorage);
}

//FUNCIONS

//Function to add course to cart
function buyCourse(e){
    e.preventDefault();
    //Applying Delegation to add cart
    if (e.target.classList.contains('add-cart')){
        const course = e.target.parentElement.parentElement;
        //Parameter with selected course by delegation
        readDataCourse(course);
    }
}

//Read data course
function readDataCourse(course){
    //Create object with data course
    const infoCourse = {
        id: course.querySelector('a').getAttribute('data-id'),
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent
    }

    insertCart(infoCourse);

}

//Show selected course in the cart
function insertCart(course) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${course.image}" width=150></td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td><a href="#" class="remove-course" data-id="${course.id}">X</a></td>
    `;
    coursesList.appendChild(row);
    saveCourseLocalStorage(course);
}

//Remove course from cart
function removeCourse(e){
    e.preventDefault();
    let course, courseId;
    if(e.target.classList.contains('remove-course')){
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');
    }
    removeCourseLocalStorage(courseId);
}

//Empty cart with button
function emptyCart(){
    // coursesList.innerHTML = '';
    while(coursesList.firstChild) {
        coursesList.removeChild(coursesList.firstChild);
    }

    //Empty local storage
    emptyLocalStorage();

    return false;
}

//Save courses into the cart to local storage

function saveCourseLocalStorage(course){
    let courses;
    //Take data value from LS array or empty
    courses = getCoursesLocalStorage();
    //Course selected added to array
    courses.push(course);

    localStorage.setItem('courses', JSON.stringify(courses));
}

//Check if Local storage is empty
function getCoursesLocalStorage(){
    let coursesLS;

    if(localStorage.getItem('courses') === null) {
        coursesLS = [];
    } else {
        coursesLS = JSON.parse(localStorage.getItem('courses'));
    }
    return coursesLS;
}

//Show local storage courses into cart

function readLocalStorage(){
    let coursesLS;

    coursesLS = getCoursesLocalStorage();

    coursesLS.forEach(function(course){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${course.image}" width=150></td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td><a href="#" class="remove-course" data-id="${course.id}">X</a></td>
        `;
        coursesList.appendChild(row);
    });
}

//Remove course by id at local storage
function removeCourseLocalStorage(course) {
    let coursesLS;
    //Get courses array
    coursesLS = getCoursesLocalStorage();
    //Iterate comparing removed id course with LS courses
    coursesLS.forEach(function(courseLS, index){
        //course: course out from the function
        if(courseLS.id === course) {
            coursesLS.splice(index, 1);
        }
    });
    //Add actual array to LS
    localStorage.setItem('courses', JSON.stringify(coursesLS));
}

//Empty local storage
function emptyLocalStorage() {
    localStorage.clear();
}