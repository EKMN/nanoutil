import def from './def'

const reduce = ([ x, ...xs ], f, memo, i = 0) => (def(x) ? reduce(xs, f, f(memo, x, i), i + 1) : memo)

export default reduce
