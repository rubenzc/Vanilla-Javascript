//VARIABLES

const tweetList = document.getElementById('tweets-list');


//EVENT LISTENERS

eventListeners();

function eventListeners() {
    
    //Submit form to add tweet
    document.querySelector('#form').addEventListener('submit', addTweet);

    //Remove tweet with delegation
    tweetList.addEventListener('click', removeTweet);

}

//FUNCTIONS

//Add Tweet from Form

function addTweet(e){
    e.preventDefault();

    //Read text area value
    const tweet = document.getElementById('tweet').value;
    const removeButton = document.createElement('a');
    removeButton.classList = 'remove-tweet';
    removeButton.innerText = 'X';

    //Create element and add content to the list
    const li = document.createElement('li');
    li.innerText = tweet;
    //Add remove button to tweet
    li.appendChild(removeButton);
    //Add tweet to the list
    tweetList.appendChild(li);

    console.log(tweet);
}

//Remove tweet

function removeTweet(e){
    e.preventDefault();
    if(e.target.className === 'remove-tweet'){
        console.log(e.target.parentElement.remove());
    } 
}