describe('class relationship', () => {
	class Person {
		constructor(public name: string) { }
	}
	class Customer {
		constructor(public name: string) { }
	}

	it('must support', () => {
		const person: Person = new Customer("irda")
		expect(person.name).toBe("irda")
	})
})