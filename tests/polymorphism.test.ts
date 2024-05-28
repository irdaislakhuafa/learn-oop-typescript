describe('polymorphism', () => {
	class Employee {
		constructor(
			public name: string,
		) { }
	}

	class Manager extends Employee { }
	class VicePresident extends Manager { }

	it('must support polymorphism', () => {
		let employee: Employee = new Employee("irda")
		expect(employee.name).toBe('irda')
		expect(employee instanceof Employee).toBe(true)
		expect(employee instanceof Manager).toBe(false)
		expect(employee instanceof VicePresident).toBe(false)

		employee = new Manager("irda")
		expect(employee.name).toBe("irda")
		expect(employee instanceof Employee).toBe(true)
		expect(employee instanceof Manager).toBe(true)
		expect(employee instanceof VicePresident).toBe(false)

		employee = new VicePresident("irda")
		expect(employee.name).toBe("irda")
		expect(employee instanceof Employee).toBe(true)
		expect(employee instanceof Manager).toBe(true)
		expect(employee instanceof VicePresident).toBe(true)
	})

	it('learn method polymorphism', () => {
		const sayHello = (value: Employee): string => {
			return `Hello ${value.name}`
		}

		expect(sayHello(new Employee("irda"))).toBe("Hello irda")
		expect(sayHello(new Manager("irda"))).toBe("Hello irda")
		expect(sayHello(new VicePresident("irda"))).toBe("Hello irda")
	})
})