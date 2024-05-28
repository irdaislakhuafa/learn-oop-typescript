describe('class method overriding', () => {
	class Employee {
		name: string

		constructor(v: { name: string }) {
			this.name = v.name
		}

		sayHello(name: string): string {
			return `Hello ${name}, my name is ${this.name}`
		}
	}

	class Manager extends Employee {
		constructor(name: string) {
			super({ name })
		}

		sayHello(name: string): string {
			return `${super.sayHello(name)} and i'm is Manager`
		}
	}

	it('learn method overriding', () => {
		const employee = new Employee({ name: "a" })
		expect(employee.name).toBe('a')
		expect(employee.sayHello('b')).toBe('Hello b, my name is a')

		const manager = new Manager('c')
		expect(manager.name).toBe('c')
		expect(manager.sayHello(employee.name)).toBe("Hello a, my name is c and i'm is Manager")
	})
})