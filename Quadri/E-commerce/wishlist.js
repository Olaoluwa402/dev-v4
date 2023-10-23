

displayProduct()
// getting the button that opens the Modal
    let btn = document.getElementById('cart');
btn.addEventListener('click',()=>openModal(1))


let modal = document.getElementById('modal');

// button that close the modal
let span = document.getElementsByClassName('close')[1];
span.addEventListener('click',()=>closeModal(1))

// open the first modal
let openProductbtn = document.getElementById('addproduct-btn')

openProductbtn.addEventListener('click',()=>openModal(0))

// close the first modal

let closeProductBtn = document.getElementsByClassName('close')[0]
closeProductBtn.addEventListener('click',()=> closeModal(0))

// code to close add product modal


function openModal(position){
    let modal = document.getElementsByClassName('modal')[position]
    modal.style.display ='block';

}

function closeModal(position){
    let closeModal = document.getElementsByClassName('modal')[position]
    closeModal.style.display ='none';

}


// code to open add products modal

const submitProductBtn = document.querySelector('#add_productBtn')

submitProductBtn.addEventListener('click', addProductHandler)

console.log(submitProductBtn);

function addProductHandler(){
    const title = document.querySelector('.product-title').value
    const price = document.querySelector('.product-price').value
    const oldPrice = document.querySelector('.product-oldprice').value
    const productImg = document.querySelector('.product-img').value
    const productDesc = document.querySelector('.product-desc').value


    const data = {
        title,
        price,
        oldPrice,
        productImg,
        productDesc,
    
    };

    const validateResult = validate(data)
    if(Object.keys(validateResult).length > 0){
        alertMsg('form validation error', 'error')
        document.getElementById('error-title').textContent =validateResult.title ? validateResult.title : '';
        document.getElementById('error-price').textContent = validateResult.price ? validateResult.price : '';
        document.getElementById('error-oldprice').textContent = validateResult.oldprice ? validateResult.oldprice : '';
        document.getElementById('error-img').textContent = validateResult.img ? validateResult.img : '';
        document.getElementById('error-desc').textContent = validateResult.desc ? validateResult.desc : '';


        setTimeout(()=>{
            document.getElementById('error-title').textContent = "";
            document.getElementById('error-price').textContent = "";
            document.getElementById('error-oldprice').textContent = "";
            document.getElementById('error-img').textContent = "";
            document.getElementById('error-desc').textContent = "";
        },4000)
        return;

    }

    const product = new Product(data);
    const products = getItemsStore('products');

const productExist = products.find((p)=> p.title == product.title)
    if(productExist){
        alertMsg('product already exists')
        return;
    }

    const newProduct = [...products,product];

    saveItemToStore('products',newProduct)
alertMsg('product added successfully')

clearProductsField()

closeModal(0)

displayProduct()

}


// validation of form fields

function validate({title,price,oldPrice,productImg,productDesc}){
    const errors = {}
    if(!title){
        errors.title = 'title is required'
    }
    if(+price==0){
        errors.price = 'price is required, must be a number and most be greater than zero(0)'
    }
    if(+oldPrice==0){
        errors.oldprice = 'price is required, must be a number and most be greater than zero(0)'

    }

    const regex =  /^https:\/\/[a-zA-Z0-9\W]+.png|.jpg|.jpeg|.svg$/gi;
       console.log(regex.test(productImg))

        if(!productImg){
            errors.productImg ='image Url is required'
        }
        if(!productDesc){
            errors.productDesc ='product description is required '
            console.log('errors')
        }
        return errors;
};


// alertMsg function 

function alertMsg(message,type){
    const alertBox = document.createElement('div')
    alertBox.style.width = '300px';
    alertBox.style.height = '100px';
    alertBox.style.borderRadius = '10px';
    alertBox.style.padding = '10px';
    alertBox.style.color = '#fff';
    alertBox.style.backgroundColor = `${type == 'success' ? 'blue' : type == 'error' ? 'red' : 'red'}`
    alertBox.style.position = 'fixed';
    alertBox.style.top = 0;
    alertBox.style.right = 0;
    alertBox.style.zIndex = 9999;
    alertBox.style.display = 'flex';
    alertBox.style.justifyContent = 'center';
    alertBox.style.alignItems = 'center';
    alertBox.innerHTML = `<p> ${message} </p>`;

    const bodyElem =document.querySelector('body')
    bodyElem.appendChild(alertBox);


    // remove alertBox

    setTimeout(()=>{
        bodyElem.removeChild(alertBox);
    }, 4000)
}


//  class instatiation



class Product{
    constructor({title,price,oldprice,productImg,productDesc}){
    this.id = title + Math.random()*1000000;
    this.title = title;
    this.price = price;
    this.oldprice = oldprice;
    this.productImg = productImg;
    this.productDesc = productDesc;
}
}

 function getItemsStore(key){
    const items = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
    return items;
 }

 function saveItemToStore(key,item){
    localStorage.setItem(key, JSON.stringify(item));
 }



function displayProduct(){
    document.getElementsByClassName('display-item').innerHTML = "";
    const product = getItemsStore('products')
    product.forEach((p)=>{
        const display = document.createElement('div');
        display.className ='displayz';
        const content = `
               <span id="per">
                   <p>-35%</p>
                   <img src="./E-Assets/Quick View.png" alt="" width="20px" height="20px">
               </span>
               <img src=${p.productImg} alt="" width="150px">
               <span id="gucci">
               <i class="fa-solid fa-cart-shopping"></i>
               <p>Add to Cart</p>
           </span>
           <span id="description">
               <p>${p.title}</p>
               <p style="color: #db4444;">$${p.price} <span>$${p.oldPrice}</span></p>
               </span>
               <span id="star">
                   <img src="./E-Assets/yellowstar.png" alt="">
                   <img src="./E-Assets/yellowstar.png" alt="" >
                   <img src="./E-Assets/yellowstar.png" alt="">
                   <img src="./E-Assets/yellowstar.png" alt="">
                   <img src="./E-Assets/yellowstar.png" alt="">
                       <p>(65)</p>
                    </span>

    
        `
        

        display.innerHTML = content;

        const displayItems = document.querySelector('.display-item')

        displayItems.appendChild(display)

    })
}


function clearProductsField(){
    document.querySelector('.product-title').value = "";
    document.querySelector('.product-price').value= "";
    document.querySelector('.product-oldprice').value = "";
     document.querySelector('.product-img').value = "";
     document.querySelector('.product-desc').value = "";

};



