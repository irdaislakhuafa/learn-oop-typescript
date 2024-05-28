describe('class properties visibility', () => {
	interface CounterInterface {
		increment(): void
		getCounter(): number
	}

	class Counter implements CounterInterface {
		private counter: number = 0;

		public increment(): void {
			this.counter++
		}

		public getCounter(): number {
			return this.counter
		}
	}

	it('learn visibility', () => {
		const counter = new Counter()
		counter.increment()
		counter.increment()
		counter.increment()

		expect(counter.getCounter()).toBe(3)
	})
})