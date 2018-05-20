import spreadArg from './spreadArg'
import reduce from './reduce'

const merge = spreadArg((xs) => reduce(xs, (memo, x) => [ ...memo, ...x ], []))

export default merge
