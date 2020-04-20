//VARIABLES

const tweetList = document.getElementById('tweets-list');


//EVENT LISTENERS

eventListeners();

function eventListeners() {
    
    //Submit form to add tweet
    document.querySelector('#form').addEventListener('submit', addTweet);

    //Remove tweet with delegation
    tweetList.addEventListener('click', removeTweet);

    //Charges content
    //It charges when HTML finishes
    document.addEventListener('DOMContentLoaded', localStorageReady);

}

//FUNCTIONS

//Add Tweet from Form

function addTweet(e){
    e.preventDefault();

    //Read text area value
    const tweet = document.getElementById('tweet').value;
    //Create remove button
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

    //Add tweet to Local Storage
    addTweetLocalStorage(tweet);

}

//Remove tweet from DOM

function removeTweet(e){
    e.preventDefault();
    if(e.target.className === 'remove-tweet'){
        e.target.parentElement.remove();
        removeTweetLocalStorage(e.target.parentElement.innerText);
    } 
}

//Show local storage data in the list
function localStorageReady(){
    let tweets;

    tweets = getTweetsLocalStorage();

    tweets.forEach(tweet => {
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
    
    });
}

//Add tweet to localStorage
function addTweetLocalStorage(tweet) {

    let tweets;
    tweets = getTweetsLocalStorage();
    
    //Add new tweet
    tweets.push(tweet);

    //Local storage only manage chain text
    //Convert to string an array for Local storage & add tweet
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

//Check local storage elements
function getTweetsLocalStorage() {
    let tweets;

    //Check if local storage is empty
    if(localStorage.getItem('tweets') === null) {
         tweets = []; 
    } else {
         //Convert to JSON to manage the text chains
         tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}

//Remove tweet form local storage
function removeTweetLocalStorage(tweet) {
    let tweets, tweetRemove;
    // Remove X character from remove button
    tweetRemove = tweet.substring(0, tweet.length - 1);
    
    tweets = getTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetRemove === tweet) {
            tweets.splice(index, 1);
        }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
