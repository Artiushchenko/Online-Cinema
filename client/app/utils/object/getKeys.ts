export const getKeys = <T extends object>(object: T) =>
	Object.keys(object) as Array<keyof T>
