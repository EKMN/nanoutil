import reverse from './reverse'

const reverseArgs = (fn) => (...args) => fn(...reverse(args))

export default reverseArgs
