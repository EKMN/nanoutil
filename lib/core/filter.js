import reduce from './reduce'

const filter = (xs, fn) => reduce(xs, (memo, x) => (fn(x) ? [ ...memo, x ] : [ ...memo ]), [])

export default filter
