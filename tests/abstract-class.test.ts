describe('abstract class', () => {
	abstract class Customer {
		public readonly id: number; // non abstract properties
		public abstract name: string; // abstract properties

		constructor(id: number) { this.id = id }

		// abstract method
		public abstract sayHello(name: string): string;

		// non abstract method
		public hello(): string {
			return 'Hello'
		}
	}

	class RegularCustomer extends Customer {
		public name: string;

		constructor(id: number, name: string) {
			super(id)
			this.name = name
		}


		public sayHello(name: string): string {
			return `Hello ${name}, i'm ${this.name}`
		}
	}

	it('learn abstract class', () => {
		const rc: RegularCustomer = new RegularCustomer(1, "irda")
		expect(rc.id).toBe(1)
		expect(rc.name).toBe("irda")
		expect(rc.hello()).toBe("Hello")
		expect(rc.sayHello("someone")).toBe("Hello someone, i'm irda")
	})
})