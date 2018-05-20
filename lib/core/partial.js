const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)

export default partial
