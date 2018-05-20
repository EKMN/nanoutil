import reduce from './reduce'

const length = (xs) => reduce(xs, (memo, x) => memo + 1, 0)

export default length
