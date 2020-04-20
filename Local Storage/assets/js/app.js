//VARIABLES

const tweetList = document.getElementById('tweets-list');


//EVENT LISTENERS

eventListeners();

function eventListeners() {
    
    //Submit form
    document.querySelector('#form').addEventListener('submit', addTweet);

}

//FUNCTIONS

//Add Tweet from Form

function addTweet(e){
    e.preventDefault();

    //Read text area value
    const tweet = document.getElementById('tweet').value;

    //Create element and add content to the list
    const li = document.createElement('li');
    li.innerText = tweet;
    tweetList.appendChild(li);

    console.log(tweet);
}