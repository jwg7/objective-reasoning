// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

let user1 = {
    firstName: "Abraham",
    lastName: "Lincoln",
    userRole: 'ADMIN'
}

let user2 = {
    firstName: "John",
    lastName: "Booth",
    userRole: 'REGULAR_USER'
}

function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true
    } else {
        return false
    }
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


function getEmail(user) {
    user.firstName = user.firstName.toLowerCase();
    user.lastName = user.lastName.toLowerCase();
    return `${user.firstName}.${user.lastName}@codeimmersives.com`
}

console.log(getEmail(user1))

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let playlist1 = {
    name: 'my jams',
    songs: ['Vienna', 'Hey Ya!']
}

let playlist2 = {
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
}

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}

console.log(getPlaylistLength(playlist1));
console.log(getPlaylistLength(playlist2));

///////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////////


let homeworkArray =
    [
        { name: 'homework 1', averageScore: 99 },
        { name: 'homework 2', averageScore: 1 }
    ]

let homeworkArray1 = [

    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
]

let myArray1 = [];


function getHardestHomework(array) {
    if (array.length === 0) {
        return '';
    }
    let lowestScore = array[0].averageScore;
    let lowestHwName = array[0].name
    for (let i = 0; i < array.length; i++) {
        if (array[i].averageScore < lowestScore) {
            lowestScore = array[i].averageScore;
            lowestHwName = array[i].name;
        }
    }
    return lowestHwName
}


console.log(getHardestHomework(homeworkArray));
console.log(getHardestHomework(homeworkArray1));
console.log(getHardestHomework(myArray1));

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/*
- if statement for if we get empty arrays
- 2 paramenters that are both string arrays
return object
- create object
*/


let names = ['Jimothy', 'Maria', 'Karl'];
let numbers = ['123-456-7890', '000-000-0000', '999-888-7766']


function createPhonebook(namesArray, numbersArray) {

    if (namesArray.length === 0) {
        return {};
    }

    let phonebook = {};
    for (i = 0; i < namesArray.length; i++) {
phonebook[namesArray[i]] = numbersArray[i];
    }
return phonebook;
}

console.log(createPhonebook(names, numbers))
console.log(createPhonebook([]))



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};