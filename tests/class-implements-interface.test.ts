describe('class implement interface', () => {
	interface HasName {
		name: string;
	}

	interface CanSayHello {
		sayHello(name: string): string;
	}

	class Person implements HasName, CanSayHello {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		sayHello(name: string): string {
			return `Hello ${name}, my name is ${this.name}`
		}
	}

	it('learn interface implementations on class', () => {
		const person = new Person("a")
		expect(person.name).toBe('a')
		expect(person.sayHello("b")).toBe('Hello b, my name is a')
	})
})