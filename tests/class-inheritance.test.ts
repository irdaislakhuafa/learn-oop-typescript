describe('inheritance', () => {
	class Employee {
		name: string;

		constructor(name: string) {
			this.name = name
		}
	}

	class Manager extends Employee { }
	class Director extends Manager { }

	it('learn inheritance', () => {
		const employee = new Employee("a")
		expect(employee.name).toBe("a")

		const manager = new Manager("b")
		expect(manager.name).toBe("b")

		const director = new Director("c")
		expect(director.name).toBe("c")
	})
})