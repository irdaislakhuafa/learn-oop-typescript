describe('getter and setter', () => {
	class Category {
		_name?: string;

		get name(): string {
			if (this._name) {
				return this._name
			} else {
				return 'empty'
			}
		}

		set name(name: string | null | undefined) {
			if (name != undefined || name != null) {
				this._name = name
			}
		}
	}

	it('learn getter and setter', () => {
		const category = new Category()
		expect(category.name).toBe('empty')

		category.name = "person"
		expect(category.name).toBe('person')

		category.name = null
		expect(category.name).toBe('person')

		category.name = ''
		expect(category.name).toBe('empty')
	})
})