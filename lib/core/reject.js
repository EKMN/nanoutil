import reduce from './reduce'

const reject = (xs, fn) => reduce(xs, (memo, x) => (fn(x) ? [ ...memo ] : [ ...memo, x ]), [])

export default reject
