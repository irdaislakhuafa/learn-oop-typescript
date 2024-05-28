describe('class properties visibility', () => {
	interface CounterInterface {
		increment(): void
		getCounter(): number
	}

	class Counter implements CounterInterface {
		protected counter: number = 0;

		public increment(): void {
			this.counter++
		}

		public getCounter(): number {
			return this.counter
		}
	}

	class DoubleCounter extends Counter {
		public increment(): void {
			this.counter += 2
		}
	}

	it('learn visibility with counter', () => {
		const counter = new Counter()
		counter.increment()
		counter.increment()
		counter.increment()

		expect(counter.getCounter()).toBe(3)
	})

	it('learn visibility with double counter', () => {
		const counter = new DoubleCounter()
		counter.increment()
		counter.increment()
		counter.increment()

		expect(counter.getCounter()).toBe(6)
	})
})