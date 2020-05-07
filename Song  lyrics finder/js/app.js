import * as UI from './interface.js';
import { API } from './api.js';

UI.formSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get data from Form
    const artist = document.querySelector('#artist').value,
          song = document.querySelector('#song').value;

    if (artist === '' || song === '') {
        //Empty fields: show error
        UI.divMessages.innerHTML = 'Error. All fields are mandatory!'
        UI.divMessages.classList.add('error');
        setTimeout(() => {
            UI.divMessages.innerHTML = '';
            UI.divMessages.classList.remove('error');
        }, 3000);
    } else {
        //OK! Let's call API
        const api = new API(artist, song);
        api.checkApi()
            .then(data => {
                if (data.resp.lyrics) {
                    //The song exists
                    const lyrics = data.resp.lyrics;
                    UI.divResult.textContent = lyrics;
                } else {
                    //The song doesn't exist
                    UI.divMessages.innerHTML = 'The song does not exist. Try again!';
                    UI.divMessages.classList.add('error');
                    setTimeout(() => {
                        UI.divMessages.innerHTML = '';
                        UI.divMessages.classList.remove('error');
                        UI.formSearch.reset();
                    }, 3000);
                }
            });
    }
})