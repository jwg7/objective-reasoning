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


function getEmail(user) {
    user.firstName = user.firstName.toLowerCase();
    user.lastName = user.lastName.toLowerCase();
    return `${user.firstName}.${user.lastName}@codeimmersives.com`
}

console.log(getEmail(user1))

///////////////////////////////////////////////////////



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