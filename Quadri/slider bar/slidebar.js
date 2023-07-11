

const num = [1,2,3,4,5,"john",6,7,8];

let arr =[];

for(i=0; i < num.length; i++){

    const current = num[i];

    if(typeof current === "string"){
            
            continue;

           
    }

            arr.push(current)


}
        console.log(arr);


        function drivingStage(age){
            if(age >= 18 && age <= 50){
                return `you are ${age} years old, therefore you are eligible to drive`
            }else{
                return `you are ${age} years old, therefore you are not eligible to drive`
            }
        }

        console.log(drivingStage(50));





        const numbers = [1,2,3,4,5,6,7,8,9];

        const even = [];

        for(i =0; i< numbers.length; i++){
            const current = numbers[i];

            if(current %2!=0){
                continue;
            }

            even.push(current);

            
        }

        console.log(even, "even-number")
