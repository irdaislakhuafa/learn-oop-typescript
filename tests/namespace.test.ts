import { MathUtil } from "../src/namespace"

describe('namespace', () => {
	it('use namespace MathUtil', () => {
		expect(MathUtil.PI).toBe(3.14)
		expect(MathUtil.sum(1, 1)).toBe(2)
	})
})