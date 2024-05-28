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
			if (value instanceof VicePresident) {
				const vp = value as VicePresident
				return `Hello VP ${vp.name}`
			}

			if (value instanceof Manager) {
				const m = value as Manager
				return `Hello Manager ${m.name}`
			}

			return `Hello Employee ${value.name}`
		}

		expect(sayHello(new Employee("irda"))).toBe("Hello Employee irda")
		expect(sayHello(new Manager("irda"))).toBe("Hello Manager irda")
		expect(sayHello(new VicePresident("irda"))).toBe("Hello VP irda")
	})
})