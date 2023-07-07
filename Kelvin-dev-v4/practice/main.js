// let whileLoopData_2 = [
//     {product_title: "title 1", product_price: "$200", product_qty: 1},
//     {product_title: "title 2", product_price: "$100", product_qty: 2},
//     {product_title: "title 3", product_price: "$300", product_qty: 3},
//     {product_title: "title 4", product_price: "$400", product_qty: 4},
//     {product_title: "title 5", product_price: "$500", product_qty: 5}
// ]

// function whileLoopOp(data){
//     let productPriceData = 0
//     for(let i = 0; i < data.length; i++){
//       whileLoopData_2[i].product_price
//        productrep1 = data[i].product_price.replace("$" , "")

//        productrep2 = parseInt(productrep1)

//        productPriceData += productrep2
      
       
//     }
//     return productPriceData
// }

// console.log(whileLoopOp(whileLoopData_2))

// let num = 1;
// do{
//     console.log(num);
//     num++
// } while(num <= 5)

// const digits = [1,2,3,4,5]

// for (const num of digits){
//     console.log(num * num)
// }

const ints = [1, 2, 3, "John", 5, 6, 7, 8, 10]

const newArr = []

for(let i = 0; i < ints.length; i++){
    if (typeof(ints[i]) === "string" ) {
        continue
    }
    newArr.push(ints[i])
} 

console.log(newArr)