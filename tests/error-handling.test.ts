describe('error handling', () => {
	class ValidationError extends Error {
		constructor(public msg: string) {
			super(msg)
		}
	}

	const doubleIt = (value: number): number => {
		if (value <= 0) {
			throw new ValidationError("value cannot be less than 0")
		}

		return value * 2
	}


	// try error handling with Go-Lang style
	const goDoubleIt = (value: number): [number, Error | null] => {
		if (value <= 0) {
			return [0, new ValidationError("value cannot be less than 0")]
		}

		return [value * 2, null]
	}

	it('try get exception error', () => {
		try {
			const result: number = doubleIt(-1)
			console.log(result)
		} catch (e) {
			if (e instanceof ValidationError) {
				console.log(e.message)
			}
		}
	})

	it('try golang style error handling', () => {
		let [result, err] = goDoubleIt(-1)
		expect(err instanceof ValidationError).toBe(true)
		expect(result).toBe(0)

		let [result2, err2] = goDoubleIt(2)
		expect(err2 instanceof ValidationError).toBe(false)
		expect(result2).toBe(4)
	})
})