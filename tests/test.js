import test from 'ava'
import nu from '../dist/nu.umd.min'

const double = (i) => i * 2
const even = (i) => i % 2 === 0

test('reverse', (t) => {
  const reversed = nu.reverse([ 1, 2, 3 ])
  t.deepEqual(reversed, [ 3, 2, 1 ])
})

test('length', (t) => {
  const length = nu.length([ 1, 2, 3 ])
  t.deepEqual(length, 3)
})

test('map', (t) => {
  const mapped = nu.map([ 1, 2, 3 ], double)
  t.deepEqual(mapped, [ 2, 4, 6 ])
})

test('filter', (t) => {
  const filtered = nu.filter([ 1, 2, 3, 4 ], even)
  t.deepEqual(filtered, [ 2, 4 ])
})

test('reject', (t) => {
  const rejected = nu.reject([ 1, 2, 3, 4 ], even)
  t.deepEqual(rejected, [ 1, 3 ])
})

test('first', (t) => {
  const first = nu.first([ 1, 2, 3, 4 ], 3)
  t.deepEqual(first, [ 1, 2, 3 ])
})

test('last', (t) => {
  const last = nu.last([ 1, 2, 3, 4 ], 2)
  t.deepEqual(last, [ 3, 4 ])
})

test('merge', (t) => {
  const merged = nu.merge([ 1, 2, 3 ], [ 4, 5, 6 ])
  t.deepEqual(merged, [ 1, 2, 3, 4, 5, 6 ])
})

test('flatten', (t) => {
  const flattened = nu.flatten([ 1, [ 2, 3, [ 4, [ 5, [ [ 6 ] ] ] ] ] ])
  t.deepEqual(flattened, [ 1, 2, 3, 4, 5, 6 ])
})

test('add', (t) => {
  const added = nu.add(1, 2, 3, 4, 5)
  t.deepEqual(added, 15)
})

test('multiply', (t) => {
  const multiplied = nu.multiply(2, 5, 10)
  t.deepEqual(multiplied, 100)
})

test('divide', (t) => {
  const divided = nu.divide(100, 2, 5)
  t.deepEqual(divided, 10)
})

test('min', (t) => {
  const min = nu.min([ 0, 1, 2, 3, 4, 5 ])
  t.deepEqual(min, 0)
})

test('max', (t) => {
  const max = nu.max([ 0, 1, 2, 3, 4, 5 ])
  t.deepEqual(max, 5)
})

test('factorial', (t) => {
  const factorial = nu.factorial(5)
  t.deepEqual(factorial, 120)
})

test('fibonacci', (t) => {
  const fib = nu.fib(15)
  t.deepEqual(fib, 610)
})

test('quicksort', (t) => {
  const quicksort = nu.quicksort([ 8, 2, 6, 4, 1 ])
  t.deepEqual(quicksort, [ 1, 2, 4, 6, 8 ])
})

test('spreadArg', (t) => {
  const add = ([ x, ...xs ]) => (nu.def(x) ? parseInt(x + add(xs)) : [])
  const spreadAdd = nu.spreadArg(add)
  const spreadRes = spreadAdd(1, 2, 3, 4, 5) // 15
  t.deepEqual(spreadRes, 15)
})

test('flow', (t) => {
  const getPrice = nu.partial(nu.pluck, 'price')
  const discount = (x) => x * 0.9
  const tax = (x) => x + x * 0.075
  const getFinalPrice = nu.flow(getPrice, discount, tax)

  const products = [ { price: 10 }, { price: 5 }, { price: 1 } ]

  const flow = nu.map(products, getFinalPrice)
  t.deepEqual(flow, [ 9.675, 4.8375, 0.9675 ])
})

test('compose', (t) => {
  const getPrice = nu.partial(nu.pluck, 'price')
  const discount = (x) => x * 0.9
  const tax = (x) => x + x * 0.075
  const getFinalPrice = nu.compose(tax, discount, getPrice)

  const products = [ { price: 10 }, { price: 5 }, { price: 1 } ]

  const flow = nu.map(products, getFinalPrice)
  t.deepEqual(flow, [ 9.675, 4.8375, 0.9675 ])
})

// TODO
// - compare performance between native array reduce, map, filter, reduce, reverse and length with equivalents
