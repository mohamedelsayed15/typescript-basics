const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2') as HTMLInputElement
const buttonElement = document.querySelector('button')!//ignore 

type NumOrString = number | string

type ResultObject = { val: number, timestamp: Date }

interface ResultObj {
    val: number
    timestamp: Date 
}

const numResults: Array<number> = []
const stringResults: string[] = []

function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 +'    '+ num2;
    }
}

function printResult(obj: ResultObj) {
    console.log(obj.val)
    console.log(obj.timestamp)
}

buttonElement.addEventListener('click', ()=> {
    const num1 = num1Element.value
    const num2 = num2Element.value
    const result = add(+num1, +num2)
    numResults.push(result as number)
    const stringResult = add(num1, num2)
    stringResults.push(stringResult as string)
    //console.log(result)
    //console.log(stringResult)
    printResult({ val: result as number, timestamp: new Date() })
    //console.table(numResults,stringResults)

})

const myPromise = new Promise<string>((resolve, reject) => {// generic types

    setTimeout(() => {
        resolve('my promise is fulfilled')
    }, 1000)

})

myPromise.then(value => {
    console.log(value.split(' is '))
})