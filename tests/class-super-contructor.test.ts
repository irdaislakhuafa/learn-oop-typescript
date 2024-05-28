describe('class super constructor', () => {
	class Person {
		name: string
		constructor(name: string) {
			this.name = name
		}
	}

	class Employee extends Person {
		departemen: string;
		constructor(name: string, departemen: string) {
			super(name)
			this.departemen = departemen
		}
	}

	it('learn super constructor', () => {
		const employee = new Employee("irda", "IT")
		expect(employee.name).toBe("irda")
		expect(employee.departemen).toBe("IT")
	})
})