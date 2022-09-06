function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Yee';
console.log(greeter(user));
//
function greeter2(person) {
    return 'Hello, ' + person;
}
var user2 = 'Yee';
console.log(greeter2(user2));
function greeter3(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user3 = {
    firstName: 'Yee',
    lastName: 'Huang'
};
console.log(greeter3(user3));
