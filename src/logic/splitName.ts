export const splitName = (
	name: string,
): [firstName: string, lastName: string] => {
	const [first, ...rest] = name.split(' ')
	return [first, rest ? rest.join(' ') : '']
}
