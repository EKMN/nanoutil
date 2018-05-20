import reduce from './reduce'

const map = (xs, fn) => reduce(xs, (memo, x) => [ ...memo, fn(x) ], [])

export default map
