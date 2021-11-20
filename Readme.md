# About Question
In this question we have to find the tallest of all the candles height from the given array and return the occurence of it.

![candle text](images.jpeg)

# About Solution
In this code,I made one function that find the maximum number from the array and after finding max it counts how many times that number repeat in that array.

1. First input will specify about the length of the array.
```javaScript
let numberOfElements = readline.question("How many elements you want in a array:")```
```
2. We will push those elements of of given number to the array.
3. Then it will iterate through the array and  to show  the maximum number of the array.
4. After that i applied  loop on the same array, which shows the count of maximum number of the array.
```JavaScript
    for (i of candle){
        if (max<i){
            max=i
        }
    }
``` 
5. The array elements are compared with the maximum and if it finds a value equal to it then the count is incremented.
```javaScript
    for(j of candle){
        if (j===max){
            count=count+1
        }
    }
```