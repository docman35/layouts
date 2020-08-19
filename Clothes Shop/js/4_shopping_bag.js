function createTag ( tag ) {
    return document.createElement(tag);
}

function getSumPricesProducts () {
    let blockSum = document.getElementById('calculatedSum');
        blockSum.innerHTML = `£ ${localStorage.getItem('sumPricesProducts')} ` || '£' + 0;
}
getSumPricesProducts();

let selectedProductsArray = JSON.parse(localStorage.getItem('selectedProducts'));

function getProductsInfo () {
    let blockSelectedProducts = document.getElementById('blockSelectedProducts');

    for( let i = 0; i < selectedProductsArray.length; i++ ) {
        let selectedProduct = createTag('div');
            selectedProduct.className = 'selectedProduct viewItem';
            blockSelectedProducts.appendChild(selectedProduct);

        let blockProductImage = createTag('div');
            blockProductImage.className = 'blockProductImage';
            selectedProduct.appendChild(blockProductImage);
            // if( window.matchMedia("(min-width: 769px)").matches ) {
            //     selectedProduct.onmouseover = () => {
            //         productName.style.color = 'rgb(241,74,88)';
            //         blockViewItem.style.display = 'flex';
            //     }
            //     selectedProduct.onmouseout = () => {
            //         productName.style.color = 'black';
            //         blockViewItem.style.display = 'none';
            //     }
            // }

        let productImage = createTag('img');
            productImage.className = 'productImage';
            productImage.src = selectedProductsArray[i].productImage;
            blockProductImage.appendChild(productImage);

        let blockDescriptionProduct = createTag('div');
            blockDescriptionProduct.className = 'blockDescriptionProduct';
            selectedProduct.appendChild(blockDescriptionProduct);

        let productName = createTag('h3');
            productName.className = 'productName';
            productName.innerHTML = selectedProductsArray[i].productName; 
            blockDescriptionProduct.appendChild(productName);

        let productPrice = createTag('p');
            productPrice.className = 'productPrice';
            productPrice.innerHTML = selectedProductsArray[i].productPrice;
            blockDescriptionProduct.appendChild(productPrice);

        let productColor = createTag('p');
            productColor.className = 'productColor';
            productColor.innerHTML = 'Color: ' + selectedProductsArray[i].productColor;
            blockDescriptionProduct.appendChild(productColor);

        let productSize = createTag('p');
            productSize.className = 'productSize';
            productSize.innerHTML = 'Size: ' + selectedProductsArray[i].productSize;
            blockDescriptionProduct.appendChild(productSize);

        let productquanity = createTag('p');
            productquanity.className = 'productQuanity';
            productquanity.innerHTML = 'Quanity: '
            blockDescriptionProduct.appendChild(productquanity);

        let minusProduct = createTag('button');
            minusProduct.className = 'minusProduct';
            minusProduct.innerHTML = '-'
            productquanity.appendChild(minusProduct);
            minusProduct.onclick = () => {
                if( productCounter.innerHTML <= 1 ) {
                    return;
                }
                else {
                    --productCounter.innerHTML;
                    minusShoppingBagProduct();
                }
            }

        let productCounter = createTag('span');
            productCounter.className = 'productCounter';
            productCounter.innerHTML = 1;
            productquanity.appendChild(productCounter);

        let plusProduct = createTag('button');
            plusProduct.className = 'plusProduct';
            plusProduct.innerHTML = '+'
            productquanity.appendChild(plusProduct);
            plusProduct.onclick = () => {
                ++productCounter.innerHTML;
                plusShoppingBagProduct();
            }

        let removeProduct = createTag('button');
            removeProduct.className = 'removeProduct';
            removeProduct.innerHTML = 'Remove Item';
            blockDescriptionProduct.appendChild(removeProduct);
            removeProduct.onclick = () => {
                deleteBasketItem( selectedProduct );
            }
            
        let blockViewItem = createTag('span');
            blockViewItem.className = 'blockViewItem';
            blockViewItem.innerHTML = 'Edit item';
            selectedProduct.appendChild(blockViewItem);
    }
}
getProductsInfo();

function plusShoppingBagProduct () {
    let parseSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    parseSelectedProducts.push(selectedProductsArray[length]);
    localStorage.selectedProducts = JSON.stringify(parseSelectedProducts);
    calculateSumPricesProducts();
    counterOfBag();
    getSumPricesProducts();
}

function minusShoppingBagProduct () {
    let parseSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    parseSelectedProducts.pop();
    localStorage.selectedProducts = JSON.stringify(parseSelectedProducts);
}

function deleteBasketItem ( deleteBlock ) {
    let parseSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
        parseSelectedProducts.pop();
        localStorage.selectedProducts = JSON.stringify(parseSelectedProducts);
        deleteBlock.style.display = 'none';
    calculateSumPricesProducts();
    counterOfBag();
    getSumPricesProducts();
}

function clearShoppingBag () {
    let titleShoppingEmptyBag = document.getElementById('titleShoppingEmptyBag');
    let titleThaksPurchase = document.getElementById('titleThaksPurchase');
    let selectedProduct = document.querySelectorAll('.selectedProduct');
    let buttonEmptyBag = document.getElementById('buttonEmptyBag');
        buttonEmptyBag.onclick = () => {
            localStorage.clear();
            for( let i = 0; i < selectedProduct.length; i++ ) {
                selectedProduct[i].style.display = 'none';
                titleShoppingEmptyBag.style.display = 'block';
            }
        }
    let buttonCheckout = document.getElementById('buttonCheckout');
        buttonCheckout.onclick = () => {
            localStorage.clear();
            for( let i = 0; i < selectedProduct.length; i++ ) {
                selectedProduct[i].style.display = 'none';
                titleThaksPurchase.style.display = 'block';
            }
        }
}
clearShoppingBag();