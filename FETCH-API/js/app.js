document.getElementById('txtBtn').addEventListener('click', loadTxt);
document.getElementById('jsonBtn').addEventListener('click', loadJSON);
document.getElementById('apiBtn').addEventListener('click', loadREST);

//FETCH API with local Data
function loadTxt () {
    //url
    fetch('data.txt')
        //Connection and tell the FETCH API how you want the data (.txt)
        .then(res => res.text() )
        //You already have the data and you can access it
        .then(data => document.getElementById('result').innerHTML = data)
        .catch(error => console.log(error));
}

//FETCH API with JSON
function loadJSON(){
    fetch('employees.json')
        //Connection & we want the data in JSON format
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(function(employee){
                html += `
                    <li>Name: ${employee.name} - Job: ${employee.job}</li>
                `;
            })
            document.getElementById('result').innerHTML = html;
        })
        .catch(error =>console.log(error));
}

//FECTH API with API REST
function loadREST() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(images => {
            let html = '';

            images.forEach(function(image){
                html += `
                    <li>
                        <a href="${image.post_url}" target_blank>Image</a>
                        ${image.author}
                    </li>
                `;
            });
            document.getElementById('result').innerHTML = html;
        })
        .catch(error => console.log(error));
}