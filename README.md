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

* `function1(head)`: Returns the head of an array.
* `function2(tail)`: Returns the tail of an array.
* `function3(middle)`: Returns the middle of an array.
* `function4(assertArraysEqual)`: Compairs two arrays and informs you if they are equal or not.
* `function5(assertEqual)`: Checks if a function is outputting an expected value.
* `function6(assertObjectsEqual)`: Compairs two objects and informs you if they are equal or not.
* `function7(countLetters)`: Takes in a string and informs the amount of time each character occurs within the given string. 
* `function8(countOnly)`: This tkes in an object and an item, it will then check if the given item is in the object and it will return the amount of times that item occurs in the given object.
* `function9(eqArrays)`: Compairs two arrays and returns true of false (if they are equal or not).
* `function10(eqObjects)`: Compairs two objects and returns true of false (if they are equal or not).
* `function11(findKey)`: This takes in two arguments (an object and a function). The function determines what value it is looking for and findKey returns the key that holds the value it is looking for.
* `function12(findKeyByValue)`: This takes in two arguments (an object and a value). The object is searched (checking if it countains the given value placed in the argument) and returns the given value if it is present in the object, if the value is not within the object, findKeyByValue returns undefined.
* `function13(flatten)`: Converts nested arrays into a single array.
* `function14(letterPositions)`: This takes in a string and returns an object with the word divided into letters, and the value of each letter corresponds to the index position of each letter within the string.
* `function15(map)`: Takes in a function and an array. The function determines what items you want to outpus from the array. Some options are: array length, first letter of each word in the array and search for a value within the given array.
* `function16(takeUntil)`: This function takes in two arguments; an array and a function, the function arguments determines what value it will recognize from the array. takeUntill will then return all of the values of the given array but will stop returning the array items when it finds the value informed in the function argument. 
* `function17(without)`: Compair 2 arrays, and returns the values that don't repeat between the first and second array.