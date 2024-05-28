describe('class properties', () => {
	// create class
	class Customer {
		// properties
		readonly id: number;
		name: string = ""; // default value
		age?: number = 0;

		// create constructor
		constructor(id: number, name?: string) {
			console.log("create new customer");
			this.id = id
			if (name) {
				this.name = name
			}
		}

		sayHello(name: string): string {
			return `Hello ${name}, my name is ${this.name}`;
		}
	}

	class Order { }

	it('learn class properties', () => {
		const customer = new Customer(1, "irda");
		customer.age = 22

		console.log("customer:", customer)
		console.log("customer.id:", customer.id)
		console.log("customer.name:", customer.name)
		console.log("customer.age:", customer.age)
	})

	it('learn class method', () => {
		const customer = new Customer(1, "irda")
		expect(customer.sayHello('haha')).toBe('Hello haha, my name is irda')
	})
})