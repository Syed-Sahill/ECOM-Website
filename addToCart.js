import { getCartProductFromLS } from "./getCartProduct.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLS();
export const addToCart = (event , id , stock) =>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const curProdElem = document.querySelector(`#card${id}`);
    let quantity = curProdElem.querySelector(".product-quantity").innerText;
    let price = curProdElem.querySelector(".product-price").innerText;

    price = price.replace("₨" , "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    if(existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id , quantity , price};
        updatedCart =  arrLocalStorageProduct.map((curProd) =>{
            return curProd.id === id ? updatedCart : curProd; 
        });
        console.log(updatedCart);
        localStorage.setItem("cartProductLS" , JSON.stringify(updatedCart));

        showToast("add" , id);
    }

    if(existingProd){
        return false
    };
    
    price = Number(price * quantity);
    quantity = Number(quantity)

    let updateCart = {id , quantity , price};

    arrLocalStorageProduct.push(updateCart);

    localStorage.setItem("cartProductLS" , JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    showToast("add" , id);

};