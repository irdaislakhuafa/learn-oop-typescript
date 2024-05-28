describe('class parameter properties', () => {
	class Person {
		constructor(
			public name: string
		) { }
	}

	it('learn parmeter properties', () => {
		const person = new Person("irda")
		expect(person.name).toBe("irda")

		person.name = "someone"
		expect(person.name).toBe("someone")
	})
})