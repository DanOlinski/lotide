# Lotide 

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dan.olinski/lotide`

**Require it:**

`const _ = require('@dan.olinski/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: This function takes in an array and returns the first value of that array.
* `tail`: This function takes in an arry and returns all values except for the first value of the given array.
* `middle`: This function takes in an arry and returns the values in the middle of that array.
* `assertArraysEqual`: This function takes in a function(that outputs an array) and an array. the 'expected' value an array that you expect the function will output, assertArraysEqual will then tell you if your function passed the test or not.
* `assertEqual`: This function takes in a function and a primative value. the 'expected' value is what you expect the function will output, assertEqual will then tell you if your function passed the test or not.
* `assertObjectsEqual`: This function takes in a function(that outputs an object) and an object. the 'expected' object is what you expect the function will output, assertObjectEqual will then tell you if your function passed the test or not.
* `countLetters`: This function takes in a string and informs the amount of times each character occurs within the given string. 
* `countOnly`: This takes in an object and an item, it will then check if the given item is in the object and it will return the amount of times, that item occurs in the given object.
* `eqArrays`: Compairs two arrays and returns true of false (if they are equal or not).
* `eqObjects`: Compairs two objects and returns true of false (if they are equal or not).
* `findKey`: //This function takes in two arguments (an object and a function). The function determines what value it is looking for from within the object, and findKey returns the key that holds the value it is looking for.
* `findKeyByValue`: This function takes in two arguments (an object and a value). The object is searched (checking if it countains a key equal to the given value), findKeyByValue then returns the key that contains an entry equal to the value argument. If the value is not within the object, findKeyByValue returns undefined.
* `flatten`: Converts nested arrays into a single array.
* `letterPositions`: This function takes in a string and returns an object with the word divided into letters(each letter is a key), and the value of each letter corresponds to the index position of each letter within the string.
* `map`: //this function takes in a function and an array. The function will analize each item in the given array. when map is called the callback function will determines what aspect of the array items you want to visualize. Some options are: array length, first letter of each word in the array or simply print out each item of the given array.
* `takeUntil`: This function takes in two arguments; an array and a function, the function arguments determines what value it will recognize from the array. takeUntill will then return all of the values of the given array but will stop returning the array items when it finds the value informed in the function argument. 
* `without`: This function takes in a source array and an itemsToRemove array, it then returns only the items from the source array that are not in the itemsToRemove array.