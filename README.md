# nanoutil
An ultralight library of tiny utilities for (functional) JavaScript

## Why?
I fully acknowledge that there are a gazillion other utility and functional programming libraries out there. However, they are usually somewhat bloated, perhaps not in the sense of being overly heavy, but rather containing way too much of everything. My goal with this library is to create something that is simple enough to be useful "out-of-the-box". I don't have time, or the motivation, to read pages of documentation just to be able to use a function properly. Thus, each utility in here should have just the "right amount" of bells and whistles,but no more. Data in, data out. No side-effects. Pure and simple 😉.

## Usage
  ```js
    import nu from 'nanoutil'

    nu.shorten({ what: 'array', from: 'tail', source: [1,2,3] })
    // => returns [1]

    nu.convert({ what: 'string', to: 'integer', source: 12 })
    // => nu handles this by throwing a custom error message ("Conversion failed because the provided source (12) was not of the type 'string'")

    nu.convert({ what: 'integer', to: 'string', source: 55 })
    // => valid conversion. Returns '55'

    // Nu will return a function that expects the source argument if source is omitted.
    const intToStr = nu.convert({ what: 'integer', to: 'string' })
    const convertedInt = intToStr(35)
    // => '35'

  ```

## Goals
- Verbose API
- A balance between readability and minimal structure. One-liners are okay if they are comprehensible.
- Minimal footprint when import the entire bundle: target <= 10kb (w/o gzip)
- If new language-features can make the code shorter and more elegant, then it should be refactored to utilize those features. 

## Utilities from A to Z
* (there will be more, I promise)

## Good to know (?)
* [Heavily inspired by an Article from Casey Morris](https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3)
* Tests using Ava
* Linting & style using Standard.js
* SemVer
