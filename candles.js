function maxheight(candle){
    let max=candle[0]
    let count=0
    for (i of candle){
        if (max<i){
            max=i
        }
    }
    console.log(`max ${max}`)
    for(j of candle){
        if (j===max){
            count=count+1
        }
    }
    console.log("count",count)
}
const readline = require("readline-sync")
let numberOfElements = readline.question("How many elements you want in a array:")
let arr=[]
for(let i=1; i<=numberOfElements; i++){
    elementsOfArray=readline.questionInt("Elements number you want in a array : ")
    arr.push(elementsOfArray)
}
console.log(arr)
maxheight(arr)