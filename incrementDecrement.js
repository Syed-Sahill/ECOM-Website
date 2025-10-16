import { getCartProductFromLS } from "./getCartProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (event , id , stock , price) =>{
    const currCardElem = document.querySelector(`#card${id}`);
    const productQuantity = currCardElem.querySelector(".product-quantity");
    const productPrice = currCardElem.querySelector(".product-price");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();

    let existingProd = localCartProducts.find((currProd) => currProd.id == id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price
    }else{
        localStoragePrice = price;
        price = price
    };

    if(event.target.className === "cart-Increment"){
        if(quantity < stock){
            quantity += 1;
        }else if( quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === "cart-Decrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id , quantity , price: localStoragePrice};

    updatedCart =  localCartProducts.map((curProd) =>{
        return curProd.id == id ? updatedCart : curProd; 
    });
    localStorage.setItem("cartProductLS" , JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    updateCartProductTotal();
}