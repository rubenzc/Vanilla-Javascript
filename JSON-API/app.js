const loadPosts = document.getElementById('load').addEventListener('click', loadAPI);

function loadAPI(){
    //Create object
    const xhr = new XMLHttpRequest();
    //Open connection
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    //Load & read data
    xhr.onload = function() {
        if(this.status === 200) {
            const answer = JSON.parse(this.responseText);

            let content = '';
            answer.forEach(function(post){
                content += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById('list').innerHTML = content;
        }
    }
    //Send connection
    xhr.send();
}