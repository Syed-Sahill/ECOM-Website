export const homeQuantityToggle = (event, id , stock ) =>{
    const currCardElem = document.querySelector(`#card${id}`);
    // console.log(currCardElem)

    const productQuantity = currCardElem.querySelector(".product-quantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className === "cart-Increment"){
        if(quantity < stock){
            quantity += 1;
        }else if( quantity === stock){
            quantity = stock;
        }
    }

    if(event.target.className === "cart-Decrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity" , quantity);
    return quantity;
};