import reduce from './reduce'

const first = (xs, n) => reduce(xs, (memo, x, i) => (i < n ? [ ...memo, x ] : [ ...memo ]), [])

export default first
