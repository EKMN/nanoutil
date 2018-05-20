import def from './def'

const max = ([ x, ...xs ], result = -Infinity) => (def(x) ? (x > result ? max(xs, x) : max(xs, result)) : result)

export default max
