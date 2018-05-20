import def from './def'

const min = ([ x, ...xs ], result = Infinity) => (def(x) ? (x < result ? min(xs, x) : result) : result)

export default min
