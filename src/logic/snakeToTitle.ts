export function snakeToTitle(input: string): string {
	const [first, ...rest] = input.split('_').join(' ')
	return first.toUpperCase() + rest.join('')
}
