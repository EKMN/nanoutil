import spreadArg from './spreadArg'
import reduce from './reduce'

const multiply = spreadArg(([ x, ...xs ]) => reduce(xs, (memo, y) => memo * y, x))

export default multiply
