describe('static', () => {
	class Configuration {
		static NAME: string = "Learning TypeScript OOP"
		static VERSION: string = "v0.0.1"
		static AUTHOR: string = "Irda Islakhu Afa"
	}

	class MathUtil {
		static sum(...values: number[]): number {
			let total: number = 0;
			values.forEach(v => total += v)
			return total
		}
	}

	it('learn static properties', () => {
		expect(Configuration.NAME).toBe("Learning TypeScript OOP")
		expect(Configuration.VERSION).toBe("v0.0.1")
		expect(Configuration.AUTHOR).toBe("Irda Islakhu Afa")
	})

	it('learn static method', () => {
		const result = MathUtil.sum(1, 2, 3, 4, 5)
		expect(result).toBe(15)
	})
})