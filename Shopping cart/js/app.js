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
    let course;
    if(e.target.classList.contains('remove-course')){
        e.target.parentElement.parentElement.remove();
    }
}

//Empty cart with button
function emptyCart(){
    // coursesList.innerHTML = '';
    while(coursesList.firstChild) {
        coursesList.removeChild(coursesList.firstChild);
    }
    return false;
}

//Save courses into the cart to local storage
