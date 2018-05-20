import spreadArg from './spreadArg'
import reduce from './reduce'

const divide = spreadArg(([ x, ...xs ]) => reduce(xs, (memo, y) => memo / y, x))

export default divide
