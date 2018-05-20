import map from './map'

const swap = (a, i, j) =>
  map(a, (x, y) => {
    if (y === i) return a[j]
    if (y === j) return a[i]
    return x
  })

export default swap
