

//Object.prototype
//Person.prototype
// function Person(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
	// this.birthday = new Date(dob);
// };

//Calculate age
// Person.prototype.calculateAge = function(){
// 	const dif = Date.now() - this.birthday.getTime();
// 	const ageDate = new Date(dif);
// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
// };
//
// Person.prototype.getFullName = function () {
// 	return `${this.firstName} ${this.lastName}`
// };
//
// Person.prototype.getsMarried = function (newLastName) {
// 	this.lastName = newLastName;
// }
// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// Person.prototype.greeting = function() {
// 	return `Hello there ${this.firstName} ${this.lastName}`;
// };
//
// const person1 = new Person('John', 'Doe');
//
// console.log(person1.greeting());
//
// function Customer(firstName, lastName, phone, membership){
// 	Person.call(this, firstName, lastName);
//
// 	this.phone = phone;
// 	this.membership = membership;
// }

//Inherit the Person prototype methods

// Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer()
// Customer.prototype.constructor = Customer;
//
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
//
// console.log(customer1);

//Customer greeting
// Customer.prototype.greeting = function() {
// 	return `Hello there ${this.firstName} ${this.lastName}
// 	welcome too our company.`;
// }
//
// console.log(customer1.greeting());

// const personPrototypes = {
// 	greeting: function () {
// 		return `Hello there ${this.firstName} ${this.lastName}`;
// 	},
// 	getsMarried: function (newLastName) {
// 		this.lastName = new newLastName;
// 	}
// };
//
// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
//
// mary.getsMarried('Thompson');
// console.log(mary.greeting());
//
// const brad = Object.create(personPrototypes, {
// 	firstName: {value: 'Brad'},
// 	lastName: {value: 'Traversy'},
// 	age: {value: 36}
// });
//
// console.log(brad);
//
// console.log(brad.greeting());

// class Person{
// 	constructor(firstName, lastName, dob){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.birthday = new Date(dob);
// 	}
//
// 	greeting() {
// 		return `Hello there ${this.firstName} ${this.lastName}`
// 	}
//
// 	calculateAge(){
// 		const diff = Date.now() - this.birthday.getTime();
// 		const ageDate = new Date(diff);
// 		return Math.abs(ageDate.getUTCFullYear() - 1970);
//
// 	}
//
// 	getsMarried(newLastName) {
// 		this.lastName = newLastName;
// 	}
//
// 	static addNumbers(x, y) {
// 		return x + y;
// 	}
// }
//
// const mary = new Person('Mary', 'Williams', '11-13-1980');
//
// mary.getsMarried('Johnson');
//
// console.log(mary.calculateAge());
//
// console.log(Person.addNumbers(1, 2));

	class Person {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		greeting(){
			return `Hello ${this.firstName} ${this.lastName}`
		}
	}

class Customer extends Person {
	constructor(firstName, lastName, phone, membershipType) {
		super(firstName, lastName);

		this.phone = phone;
		this.membershipType = membershipType;
	}

	static getMembershipCost() {
		return 500;
	}
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');
console.log(john.greeting());
console.log(Customer.getMembershipCost());
