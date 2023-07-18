// Assignmnet 1
const {log} = console;

function convertToFahrenheit(celsius){

    var fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

 log(convertToFahrenheit(35), "Celsius");

 // Assignmnet 2

 const num = [3,2,4,6,8,9];
 let finalResult = []
 for(let i = 0; i < num.length; i++){
      const curr = num[i];
    if((curr) % 2 === 0){
        finalResult.unshift(curr);
    }
else  {
    finalResult.push(curr);
}
 }

log(finalResult, "Result");


//Assignmnet 3

function Convert(minutes){
    return (minutes * 60);

}

log(Convert(5), "Minutes1");
log(Convert(3), "Minutes2");


// Assignmnet 4

function checkNum(num){
    
    if((num%2) === 0){
        return (true);
    }
    else {
        return (false);
    }
}

log(checkNum(5));
log(checkNum(4));

// Assignmnet 5

function increment(numb){
    const result = numb + 1;

    return (result);

}

log(increment(0));
log(increment(7));



