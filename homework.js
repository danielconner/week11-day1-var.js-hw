var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// I expect this function to return My name is Keith because the var is stated before the function is called

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// I expect the score to be 3 as the var called inside the fucntion will take precidence

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// I expect ducks, dogs and lions to be printed out as the myAnimals inside the function will again take precidence

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

 // I expect the first log out to have the name harvey and the second log out to show the name Keith.
  // the first log will show the var that has been written inside the function, and the second will have the orginal var as its not being called inside the function.


  var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  };

  var printName = function(detective) {
    return detective.name
  };

  var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
  };

  console.log(detectiveInfo());

  // this function will return Poirot as the console.log is using detectiveInfo and this has the name set as Poirot

  var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// I expect the murder to be named as Rick as log is not being called in a function and rick has been declared globally as the var murder. but i could be wrong.


var nickName = "Old Danny";

var newNickName = function(){
  var nickName = "Distingushed Danny"

  var newerNickname = function(){
      var nickName = "Just plain old Danny"
  }

  console.log(newNickName);
}

// heres my own episode.
