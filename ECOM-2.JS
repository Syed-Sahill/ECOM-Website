import { showProductContainer } from "./ECOM-HOME-PRODUCT-CARD.JS";

fetch('./products.json')
  .then(response => response.json())
  .then(data =>{ 
    console.log(data);
    showProductContainer(data);
  });
