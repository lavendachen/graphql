class User {
    fullName: string
    firstName: string
    lastName: string
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + ' ' + lastName
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter4 (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let userClass = new User('Yee', 'Huang')
  
  console.log(greeter4(userClass))

  