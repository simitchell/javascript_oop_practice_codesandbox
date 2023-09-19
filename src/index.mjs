import "./styles.css";

class Person {
  constructor(name, email, phone, friends = []) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.friends = friends;
  }

  greet(otherPerson) {
      console.log(`Hello ${otherPerson.name}, I am ${this.name}!`);
  }

  print_contact_info() {
    console.log(this.name, this.email, this.phone, this.friends);
  }

  add_friend(otherPerson) {
    this.friends.push(otherPerson);
  }

  num_friends() {
    console.log(this.friends.length);
  }

  list_friends() {
    this.friends.forEach(function(a) {
      console.log(a.name);
    })
  }
}


// Instantiate sonny and jordan
const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// say hi, guys
sonny.greet(jordan);
jordan.greet(sonny);

// Old way to add friends
// jordan.friends.push(sonny);
// sonny.friends.push(jordan);

// New way to add friends
jordan.add_friend(sonny);
sonny.add_friend(jordan);

// console.log(jordan.friends.length);
// console.log(sonny.friends.length);

sonny.print_contact_info();
jordan.print_contact_info();

sonny.num_friends();
jordan.num_friends();

sonny.list_friends();
jordan.list_friends();



// CARS

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  print_info() {
    console.log(this.make, this.model, this.year);
  }
}

const car = new Vehicle('VW', 'GTI', '2018');

car.print_info();

