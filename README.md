# Lotide 

This is an npm library package that contains general purpose javascript algorithms that can be installed and used when creating javascript applications, eliminating extra work of re writing basic javascript functions. Inspired on the [Lodash](https://lodash.com) library.

## Usage

**Install it:**
- to install this library type the following command in your terminal: `npm install @dan.olinski/lotide`

**Require it:**
-to use the library add the following code in the javascript file in witch you wish to use the library: `const lodash = require('@dan.olinski/lotide');`

**Call it:**
 - Following is an example of using the tail module from lotide library:
    - `lodash.tail([1, 2, 3])`
    - This module will return the tail of the array passed in; `[2, 3]`

## Content of the lotide library

- `flatten`: Converts nested arrays into a single level array.
  - Call (example): `lodash.flatten([ [0], 1, [2, 3], [4] ])`
  - returns: `[0, 1, 2, 3, 4]`
  
- `letterPositions`: This function takes in a string and returns an object with the word divided into letters(each letter is a key), and the value of each letter corresponds to the index position of each letter within the string.
  - Call (example): `lodash.letterPositions('test')`
  - returns: `{ t: [0, 3], e: [1], s: [2] }`
  
- `map`: This function takes in an array and a callback. The callback function will determine an action to be applied to each item in the passed in array. Map will then return an array with the processed data.
  - Call (example): `lodash.map( [1, 2, 3], numb => numb*3 )`
  - returns: `[3, 6, 9]`
  
- `takeUntil`: This function takes in two arguments; an array and a callback. The takeUntil() method is used to return the items in the passed in array until the given callback returns true. If the given value is not found or the callback never returns true, the takeUntil() method will return all items in the passed in array.
  - Call (example): `lodash.takeUntil([2, 4, 6, 8, 10], (numb) => {numb > 6}`
  - returns: `[2, 4, 6, 8]`

- `findKeyByValue`: This function takes in two arguments (an object and a value). The object is searched (checking if it contains a key equal to the given value), findKeyByValue then returns the key that contains an entry equal to the value argument. If the value is not within the object, findKeyByValue returns undefined.
  - Call (example): `lodash.findKeyByValue({'sci_fi': 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'The Wire')`
  - returns: `drama`

- `without`: This function takes in 2 arrays; the 1st array is the source array, and the second array is the items you want to remove from the source array.
   - Call (example): `lodash.without([1,2,3], [2])`
   - returns: `[1, 3]`

- `countLetters`: This function takes in a string and informs the amount of times each character occurs within the given string.
  - Call (example): `lodash.countLetters('test')`
  - returns: `{ t: 2, e: 1, s: 1 }`
  
- `countOnly`: This function takes in an object and an array of strings, it will then check if the strings from the givin array are present as keys within the passed in object. The function will also do a second check for object keys that have a value equal to true, and will disconsider the keys that have a value equal to false.
CountOnly, will then return the amount of times each item from the passed in array occurs in the passed in object (taking into account the true of false key values).
  - Call (example): `lodash.countOnly(`
  `['Salima', 'Aghouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang',],`
  `{'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}`
  `)`
  - returns: `{ Fang: 2, Jason: 1 }`
  
- `eqArrays`: Compares two arrays and returns true or false (if they are equal or not).
  - Call (example): `lodash.eqArrays([1,2,3,4], [1, 2, 3])`
  - returns: `false`
  
- `eqObjects`: Compares two objects and returns true of false (if they are equal or not).
  - Call (example): `lodash.eqObjects({a:1, b:2, c:[1, 2, 3]}, {a:1, b:2, c:[1, 2, 3]})`
  - returns: `true`
  
- `head`: This function takes in an array and returns the first value of that array.
  - Call (example): `lodash.tail([1, 2, 3])`
  - returns: `[1]`

- `tail`: This function takes in an array and returns all values except for the first value of the given array.
  - Call (example): `lodash.tail([1, 2, 3])`
  - returns: `[2, 3]`
  
- `middle`: This function takes in an array and returns the values in the middle of that array. If the number of values in the array is even, this module will return the 2 values that are located in the center of the array.
If the array has only one element or only 2 elements it has no middle element. In this case this function will return an empty array
  - Call (example): `lodash.tail([1, 2, 3])`
  - returns: `[2]`