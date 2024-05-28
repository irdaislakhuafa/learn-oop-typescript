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
})