let darr = [1,2,3,4,5,6,7,8,9,10]
console.log(darr)


function tst1 (nnew) {
    let newdarr = []

    for (num in darr){
        if(num % 2 === 0) {
            return newdarr + num
        }
        else return newdarr
    }
    return newdarr
}

console.log(tst1())







