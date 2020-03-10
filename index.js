function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
    const element = arr[i]
    callback(element)
    }
    return arr
}

let callback = function(element){
    return element ** 2
}

array = [2,4,6]

function myMap(arr, callback){
    let newArray= []
    for(let i = 0; i < arr.length; i++){
    const element = arr[i]
    newArray.push(callback(element))
    }
    return newArray
}

function myFilter(arr, condition){
    let newArray= []
    for(let i = 0; i < arr.length; i++){
    const element = arr[i]
        if (condition(element)){
            newArray.push(element)
        }
    }
    return newArray
}

function myFind(arr, condition){
    for(let i = 0; i < arr.length; i++){
    const element = arr[i]
        if (condition(element)){
            return element
        }
    }
}

