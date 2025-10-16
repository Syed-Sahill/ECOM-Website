import { getCartProductFromLS } from "./getCartProduct.js"

export const updateCartProductTotal = ()=>{
    let productSubTotal = document.querySelector(".productSubtTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;

    let totalProductPrice = localCartProducts.reduce((accum , currElem) =>{
        let productPrice = parseInt(currElem.price) || 0;
        return accum + productPrice;
    } , initialValue);

    productSubTotal.textContent = `₨ ${totalProductPrice}`;
    productFinalTotal.textContent = `₨ ${totalProductPrice + 50}`;
}