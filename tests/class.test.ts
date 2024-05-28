
describe('class', () => {
	// create class
	class Customer {
		// create constructor
		constructor() {
			console.log("create new customer");
		}
	}

	class Order { }

	it('learn class', () => {
		const customer: Customer = new Customer();
		const order: Order = new Order();
	})

	it('learn constructor', () => {
		new Customer();
		new Customer();
	})
})