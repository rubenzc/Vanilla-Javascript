document.getElementById('txtBtn').addEventListener('click', loadTxt);

//FETCH API with local Data
function loadTxt () {
    fetch('data.txt')
        //Connection and tell the FETCH API how you want the data
        .then(function(res){
            return res.text();
        })
        //You already have the data and you can access it
        .then(function(data){
            console.log(data);
            document.getElementById('result').innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        });
}