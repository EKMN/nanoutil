import flow from './flow'
import reverse from './reverse'

const compose = (...args) => flow(...reverse(args))

export default compose
