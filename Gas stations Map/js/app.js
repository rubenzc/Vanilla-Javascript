const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.showEstablishments();
});

//Search establishment
const searcher = document.querySelector('#search input');
searcher.addEventListener('input', () => {
    if(searcher.value.length > 5) {
        //Search in API
        ui.getSearch(searcher.value);
    } else {
        ui.showEstablishments();
    }
})