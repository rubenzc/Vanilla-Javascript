
//REST API with fetch & async await
async function readTodos() {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/todos');

    //Wait until res load the data
    const data = await res.json();
    return data;
}
readTodos()
    .then(users => console.log(users));