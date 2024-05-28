describe('static', () => {
	class Configuration {
		static NAME: string = "Learning TypeScript OOP"
		static VERSION: string = "v0.0.1"
		static AUTHOR: string = "Irda Islakhu Afa"
	}

	it('learn static properties', () => {
		expect(Configuration.NAME).toBe("Learning TypeScript OOP")
		expect(Configuration.VERSION).toBe("v0.0.1")
		expect(Configuration.AUTHOR).toBe("Irda Islakhu Afa")
	})
})