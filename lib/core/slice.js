import def from './def'

const slice = ([ x, ...xs ], i, y, curr = 0) =>
  def(x) ? (curr === i ? [ y, x, ...slice(xs, i, y, curr + 1) ] : [ x, ...slice(xs, i, y, curr + 1) ]) : []

export default slice
