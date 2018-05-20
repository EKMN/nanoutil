import isArray from './isArray'
import reduce from './reduce'

const flatten = (xs) =>
  reduce(xs, (memo, x) => (x ? (isArray(x) ? [ ...memo, ...flatten(x) ] : [ ...memo, x ]) : []), [])

export default flatten
