import { getCartProductFromLS } from "./getCartProduct.js";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

fetch('./products.json')
  .then(response => response.json())
  .then(products => {
    const cartProducts = getCartProductFromLS();

    const filterProducts = products.filter(currProd => {
      return cartProducts.some(cartElem => cartElem.id === currProd.id);
    });

    console.log(filterProducts);



  //TO UPDATE THE ADDTOCART PAGE

  const cartElement = document.querySelector("#productCartContainer");
  const templateContainer = document.querySelector("#productCartTemplate");

  const showCartProduct = () =>{
        filterProducts.forEach((currProd) =>{
        const {id , image , name , stock , price } = currProd;

        let productClone = document.importNode(templateContainer.content , true);

        const LSActualData = fetchQuantityFromCartLS(id , price);

        productClone.querySelector("#card-value").setAttribute("id" , `card${id}`);
        productClone.querySelector(".product-name").textContent = name;
        productClone.querySelector(".product-image").src = image;
        productClone.querySelector(".product-quantity").textContent = LSActualData.quantity;
        productClone.querySelector(".product-price").textContent = LSActualData.price;

        productClone.querySelector(".stock-element").addEventListener("click" , (event)=>{
          incrementDecrement(event , id , stock , price);
        })

        productClone.querySelector(".remove-to-cart-button").addEventListener("click" , ()=>{
          removeProdFromCart(id);
        })

        cartElement.appendChild(productClone);
    })
  }

  showCartProduct();


  updateCartProductTotal();

   })
  .catch(error => {
    console.error("Failed to load products.json", error);
  });

