itemTotal();
updateCartTotal();

function itemTotal(){
    let cartRows = document.getElementsByClassName('cartrows');
    console.log(cartRows);
    for(let i=0;i<cartRows.length;i++){
        let priceElement = document.getElementsByClassName('price')[i];
        let qtyElement = document.getElementsByClassName('qtynumber')[i];
        // console.log(priceElement,qtyElement);
        // parseFloar will turn any string into a float - a number with decimal points after it
        let price = parseFloat(priceElement.innerText.replace('$',""));
        let quantity = qtyElement.value;
        total = (price * quantity);
        document.getElementsByClassName("total")[i].innerText = "$"+ total;
    }   
}

const removeCartItem = document.getElementsByClassName("btn-danger");
    for(let i=0; i<removeCartItem.length; i++){
        let button = removeCartItem[i];
        button.addEventListener('click', function(event){
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            updateCartTotal();
    })
}

function updateCartTotal(){
    const cartItems = document.getElementsByClassName('cartitems')[0];
    const cartRows = cartItems.getElementsByClassName('cartrows')
    let total = 0;
    for (let i=0; i< cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('price')[0];
        let qtyElement = cartRow.getElementsByClassName('qtynumber')[0];
        // console.log(priceElement,qtyElement);
        // turn any string into a float - a number with decimal points after it
        let price = parseFloat(priceElement.innerText.replace('$',""));
        let quantity = qtyElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("totalprice")[0].innerText = "$" + total;
}


