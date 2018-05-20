/* eslint-disable indent */

import length from './length'
import flatten from './flatten'
import filter from './filter'
import tail from './tail'
import head from './head'

const quicksort = (xs) =>
  length(xs)
    ? flatten([
        quicksort(filter(tail(xs), (x) => x <= head(xs))),
        head(xs),
        quicksort(filter(tail(xs), (x) => x > head(xs)))
      ])
    : []

export default quicksort
