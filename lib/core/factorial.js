const factorial = (x, acum = 1) => (x ? factorial(x - 1, x * acum) : acum)

export default factorial
