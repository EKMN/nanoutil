import reduce from './reduce'

const reverse = (xs) => reduce(xs, (memo, x) => [ x, ...memo ], [])

export default reverse
