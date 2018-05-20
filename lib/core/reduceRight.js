import reduce from './reduce'
import reverse from './reverse'

const reduceRight = (xs, fn, memo) => reduce(reverse(xs), fn, memo)

export default reduceRight
