import spreadArg from './spreadArg'
import reduce from './reduce'

const add = spreadArg(([ x, ...xs ]) => reduce(xs, (memo, y) => memo + y, x))

export default add
