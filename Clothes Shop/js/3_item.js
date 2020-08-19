function getProductSlide () {
    let productSlide = document.getElementsByClassName('suitSlide');

    for( let i = 0; i < productSlide.length; i++ ) {
        productSlide[i].onclick = () => {
            productSlide[0].src = productSlide[i].src;
            if ( productSlide[i].src == productSlide[0].src ) {
            }
        }
    }
}
getProductSlide();

let selectedProducts = [];
let selectedProductObj = {};

function setProductImage () {
    let productImage = document.getElementById('imagesProductBlock').querySelector('img:nth-of-type(1)');
    selectedProductObj.productImage = productImage.src;
}

function setProductName () {
    let productName = document.getElementsByClassName('productName');
    for( let i = 0; i < productName.length; i++ ) {
        selectedProductObj.productName = productName[i].innerHTML;
    }
}

function setProductPrice () {
    let productPrice = document.getElementsByClassName('productPrice');
    for( let i = 0; i < productPrice.length; i++ ) {
        selectedProductObj.productPrice = productPrice[i].innerHTML;
    }
}

function setproductColor () {
    let productColor = document.querySelectorAll('.colorProduct button');
    for( let i = 0; i < productColor.length; i++ ) {
        productColor[i].onclick = () => {
            selectedProductObj.productColor = productColor[i].innerHTML;
            productColor[i].style.color = 'rgb(241,74,88)';
            productColor[i].style.border = '1px solid rgb(241,74,88)';
        }
    }
}
setproductColor();

function setSizeProduct () {
    let productSize = document.querySelectorAll('.sizeProduct button');
    for( let i = 0; i < productSize.length; i++ ) {
        productSize[i].onclick = () => {
            selectedProductObj.productSize = productSize[i].innerHTML;
            productSize[i].style.color = 'rgb(241,74,88)';
            productSize[i].style.border = '1px solid rgb(241,74,88)';
        }
    }
}
setSizeProduct();

function setProductsToLocalStorage () {
    selectedProducts.push(selectedProductObj);
    
    if( localStorage.getItem('selectedProducts') === null || localStorage.getItem('selectedProducts') === undefined ) {
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    }
    else {
        let parseSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
            parseSelectedProducts.push(selectedProducts[length]);
            localStorage.selectedProducts = JSON.stringify(parseSelectedProducts);
    }
}

function buttonAddItemToBag () {
    setProductImage();
    setProductName();
    setProductPrice();
    setProductsToLocalStorage();
}