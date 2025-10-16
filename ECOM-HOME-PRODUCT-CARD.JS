import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";

const productContainer = document.querySelector(".product-container");
const productTemplate = document.querySelector(".product-template");

export const showProductContainer = (products) =>{
     if(!products){
        return false;
     }

        products.forEach((curProd) =>{
         const { brand , description , id , name , price , stock , image} = curProd;


         const productClone = document.importNode(productTemplate.content , true);

         productClone.querySelector("#card-value").setAttribute("id" , `card${id}`)

         productClone.querySelector(".product-name").textContent = name;
         productClone.querySelector(".product-image").src = image;
         productClone.querySelector(".product-image").alt = name
         productClone.querySelector(".product-stock").textContent = stock;
         productClone.querySelector(".product-description").textContent = description;
         productClone.querySelector(".product-price").textContent = `₨ ${price}`;
         productClone.querySelector(".product-actual-price").textContent = `₨ ${price * 4}`;

         productClone.querySelector(".stock-element").addEventListener("click" , (event) =>{
            homeQuantityToggle(event , id , stock);
         });


         productClone.querySelector(".add-to-cart-button").addEventListener("click" , (event) => {
         addToCart(event , id , stock);
         })


         productContainer.append(productClone);
        });
}