export function snakeToTitle(input: string): string {
	const [first, ...rest] = input.split('_').join(' ')
	return first.toUpperCase() + rest.join('')
}

export const splitName = (
	name: string,
): [firstName: string, lastName: string] => {
	const [first, ...rest] = name.split(' ')
	return [first, rest ? rest.join(' ') : '']
}

export const fillNewObject = <K extends string>(
	...keys: K[]
): Record<K, undefined> =>
	keys.reduce((t, c) => {
		return {
			...t,
			[c]: undefined,
		}
	}, {} as Record<K, undefined>)
