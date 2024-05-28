export namespace MathUtil {
	export const PI: number = 3.14
	export const sum = (...values: number[]): number => {
		let total: number = 0;
		values.forEach(v => total += v)
		return total
	}
}

export namespace Irda { }
export namespace Islakhu { }
export namespace Afa { }