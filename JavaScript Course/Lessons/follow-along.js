let user = {
  name: 'John',
  surname: 'Smith'
};

Object.defineProperty(user, 'fullName', {
  get(){
    return `${this.name} ${this.surname}`
  },

  set(value){
    [this.name, this.surname] = value.split(' ')
  }
});

user.fullName = "Test Name";

console.log(user);

class UserTwo {
  constructor(name,surname){
    this.name = name;
    this.surname = surname;
  };

  get fullName(){
    return `${this.name} ${this.surname}`;
  };

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  };

  sayHi() {
    console.log(this.name)
  };
    
}

newUser = new UserTwo('Jane', 'Willis');

console.log(newUser);
let P1 = {
  name: "Bob"
}

let P2 = class {
  name = "Jill"
}





