export const getKeys = <T>(obj: T): Array<keyof T> =>
  Object.keys(obj) as Array<keyof T>
