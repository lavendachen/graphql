function greeter (person) {
    return 'Hello, ' + person
  }
  
  let user = 'Yee'
  
  console.log(greeter(user))
  //
  function greeter2 (person: string) {
    return 'Hello, ' + person
  }
  
  let user2 = 'Yee'
  
  console.log(greeter2(user2))
  //

  interface PersonInterface {
    firstName: string
    lastName: string
  }
  
  function greeter3 (person: PersonInterface) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user3 = {
    firstName: 'Yee',
    lastName: 'Huang'
  }
  
  console.log(greeter3(user3))
//https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#%E6%8E%A5%E5%8F%A3
//https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#接口

  