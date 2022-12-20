const person = {
  name: "Bram",
  age: 25,
  greet() {
    console.log("Hi, I am " + this.name)
  },
}

person.greet()
