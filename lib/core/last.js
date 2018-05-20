import reduce from './reduce'
import length from './length'

const last = (xs, n) => reduce(xs, (memo, x, i) => (i >= length(xs) - n ? [ ...memo, x ] : [ ...memo ]), [])

export default last
