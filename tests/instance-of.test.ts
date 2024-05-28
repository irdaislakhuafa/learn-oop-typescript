describe('instance of', () => {
	class Employee { }
	class Manager { }

	const a = new Employee()
	const b = new Manager()

	it("must have problem with typeof", () => {
		expect(typeof a).toBe('object')
		expect(typeof b).toBe('object')
	})

	it('use instanceof instead of typeof', () => {
		expect(a instanceof Employee).toBe(true)
		expect(a instanceof Manager).toBe(false)

		expect(b instanceof Employee).toBe(false)
		expect(b instanceof Manager).toBe(true)
	})
})