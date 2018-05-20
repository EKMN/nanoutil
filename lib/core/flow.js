import reduce from './reduce'

const flow = (...args) => (init) => reduce(args, (memo, fn) => fn(memo), init)

export default flow
