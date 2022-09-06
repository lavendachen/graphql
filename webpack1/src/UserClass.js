var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter4(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var userClass = new User('Yee', 'Huang');
console.log(greeter4(userClass));
