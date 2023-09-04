import {
  alertMsg,
  getItemsStore,
  saveItemToStore,
  displayFavouriteCount,
} from "./common.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // load favourite count
  // displayFavouriteCount();
  // // load all favourite-products
  // //displayfavproducts();

  // const favouriteBtn = document.getElementById("fav-image");
  // console.log(favouriteBtn);
  // favouriteBtn.addEventListener("click", favouriteHandler);
  // //  alert( "Lets see how it go");
  
}

function favouriteHandler() {
  let favourites = getItemsStore("favourites"); // Corrected variable name and added missing quotes

// displayFavouriteItems(favourites);
// increaseFavouriteCount(favourites.length);
}


function  displayFavouriteCount(){
const favoriteButton = document.getElementById('fav-image');
    const favoriteCount = document.getElementById('favourite-count');

    // Initialize favorite count
    let currentFavoriteCount = 0;

    // Add a click event listener to the button
    favoriteButton.addEventListener('click', () => {
      // Increase the favorite count
      currentFavoriteCount++;
      
      // Update the counter element with the new count
      favoriteCount.textContent = currentFavoriteCount;
    });

    return currentFavoriteCount;
}



// function displayFavouriteItems(favourites) {
//   const wishlistContainer = document.getElementById("wishlist-container");
//   // wishlistContainer.innerHTML = ""; // Clear previous content

//   favourites.forEach((product) => {
//     const favouriteElemBox = document.createElement("div");
//     favouriteElemBox.className = "wishlistbox"; // Added class name assignment
//     const content = `
//       <div class="topbox">
//           <div class="topbox-img">
//               <a href="#"><img src="./Exclusive Assets/icon-delete.png" /></a>
//           </div>

//           <div class="wishlist-image">
//               <img src=${product.imageUrl} />
//           </div>
//       </div>
//       <div class="addtocart">
//           <img src="./Exclusive Assets/Cart1.png" />
//           <p>Add to cart</p>
//       </div>
//       <div class="wishlistitems">
//           <h4 class="fav-title">${product.title}</h4>
//           <div class="prices">
//               <p>$${product.price}</p>
//               <h5>${product.old_price ? `$${product.old_price}` : ""}</h5>
//           </div>
//       </div>
//   `;

//     favouriteElemBox.innerHTML = content;

//     wishlistContainer.appendChild(favouriteElemBox);
//   });
// }
// const favouriteUpdate = [...favourite, favouriteitems ] // Define the update logic here
// saveItemToStore("favourite", favouriteUpdate);

// // function increaseFavouriteCount(count) {
// //   const favouriteCountElem = document.getElementById("favourite-count");
// //   favouriteCountElem.textContent = count.toString();
// // }

// // // Assuming you have a function called favouriteUpdate to update the favourite items

