import { fillNewObject, snakeToTitle, splitName } from '../src/logic/utils'

describe('Test utility functions', () => {
	test('snakeToTitle 1', () => {
		const before = 'eye_color'
		const after = snakeToTitle(before)
		expect(after).toBe('Eye color')
	})
	test('snakeToTitle 2', () => {
		const before = 'person_EYE_color'
		const after = snakeToTitle(before)
		expect(after).toBe('Person EYE color')
	})

	test('splitName 1', () => {
		const before = 'Foo Bar'
		const [first, rest] = splitName(before)
		expect(first).toBe('Foo')
		expect(rest).toBe('Bar')
	})
	test('splitName 2', () => {
		const before = 'Foo Bar Baz'
		const [first, rest] = splitName(before)
		expect(first).toBe('Foo')
		expect(rest).toBe('Bar Baz')
	})
	test('splitName 3', () => {
		const before = 'Foo'
		const [first, rest] = splitName(before)
		expect(first).toBe('Foo')
		expect(rest).toBe('')
	})

	test('fillNewObject', () => {
		const x = fillNewObject('foo', 'bar', 'baz')
		expect(x).toMatchObject({
			foo: undefined,
			bar: undefined,
			baz: undefined,
		})
	})
})
