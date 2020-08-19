window.onload = () => {
    checkLocalStorage();
    getSizeBasket();
    getQuanityBasket();
}

function getDefaultBasketValue () {
    localStorage.setItem('sizeBasket', '0');
    return counterBlock.innerText = '(' + localStorage.getItem('sizeBasket') + ')';
}

function sumQuanityItems () {
    let sumQuanity = 0;
    let columnItem = [];
    let columnItemText = [];
    
    if( localStorage.getItem('itemsBasket') !== null ) {
        let localGetItems = JSON.parse(localStorage.getItem('itemsBasket'));
        for( let i = 0; i < localGetItems.length; i++ ) {
            if( localGetItems[i].quanityItem !== null ){
                columnItem.push(localGetItems[i].quanityItem);
            }
        }
        
        for( let j = 0; j < columnItem.length; j++ ) {
            columnItemText.push(Number(columnItem[j]));
        }
        
        for( let i = 0; i < columnItemText.length; i++ ){
            sumQuanity += columnItemText[i];
        }
    }
    return counterBlock.innerText = '(' + sumQuanity + ')', localStorage['sizeBasket'] = sumQuanity;
}

function checkLocalStorage () {
    if( localStorage.getItem('sizeBasket') === null ){
        getDefaultBasketValue();
    }
    else{
        sumQuanityItems();
    }

    if( localStorage.getItem('quatinyItem') !== null || localStorage.getItem('quatinyItem') !== '' ) {
        quanityUpDownItem();
    }
    else{
        localStorage.setItem('quanityItem', '0');
    }
}

let itemsBasket = [];
let itemsBasketObj = {};

const counterBlock = document.getElementById('counter');
const headerBasketSearch = document.getElementById('headerBasketSearch');
const searchButton = document.getElementById('searchButton');
const inputSearch = document.getElementById('inputSearch');
const smallDisplaySearch = document.getElementById('smallDisplaySearch');
const inputSmallSearch = document.getElementById('inputSmallSearch');
const searchButtonSmall = document.getElementById('searchButtonSmall');

let isOpen = false;

function showInput () {
    if ( window.matchMedia("(max-width: 414px)").matches ){
        inputSearch.style.display = 'none';
        searchButton.style.display = 'none';
        smallDisplaySearch.style.display = 'flex';
        inputSmallSearch.style.display = 'inline-block';
        inputSmallSearch.setAttribute('autofocus', 'true');
        searchButtonSmall.style.backgroundColor = '#606060';
    }
    else{
        smallDisplaySearch.style.display = 'none';
        inputSearch.style.display = 'inline-block';
        searchButton.style.display = 'inline-block';
        searchButton.style.backgroundColor = '#606060';
        inputSearch.setAttribute('autofocus', 'true');
    }
    isOpen = true;
}

function handleInputSearch () {
    let inputSearchValue = inputSearch.value;
    let inputSmallSearchValue = inputSmallSearch.value;
    
    if( inputSearchValue !== '' || inputSmallSearchValue !== '' ){
        let link = document.createElement('a');
        link.href = '../html/category-all.html';
        link.style.display = 'flex';        
        if ( window.matchMedia("(max-width: 414px)").matches ){
            link.appendChild(searchButtonSmall);
            smallDisplaySearch.appendChild(link);
        }
        else{
            link.appendChild(searchButton);
            headerBasketSearch.insertBefore( link, headerBasketSearch.children[1] );
        }
    }
    
    else{
        inputSearch.style.display = 'none';
        inputSmallSearch.style.display = 'none';
    }
    isOpen = false;
}

function onInputSearchClick () {
    if( isOpen == true ) {
        handleInputSearch();
    }
    else{
        showInput();
    }
}

// let clickSize = false;

// function clickTrue () {
//     let sizeShoesContainer = document.getElementById('sizeContainer');
//     let sizeShoesButton = sizeShoesContainer.getElementsByClassName('sizeItem');
//     for( let i = 0; i < sizeShoesButton.length; i++ ) {
//         sizeShoesButton[i].onclick = () => {
//                 sizeShoesButton[i].style.backgroundColor = '#e5e5e5';
//                 itemsBasketObj.sizeItem = sizeShoesButton[i].innerText;
//                 alert(sizeShoesButton[i].value)
//             }
//             itemsBasketObj.sizeItem = sizeShoesButton[i].innerText;
//         }
//     clickSize = true;
// }

// function clickFalse () {
//     let sizeShoesContainer = document.getElementById('sizeContainer');
//     let sizeShoesButton = sizeShoesContainer.getElementsByClassName('sizeItem');
//     for( let i = 0; i < sizeShoesButton.length; i++ ) {
//         sizeShoesButton[i].onclick = () => {
//             sizeShoesButton[i].style.backgroundColor = '#ffffff';
//         }
//     }
//         // itemsBasketObj.sizeItem = sizeShoesButton[i].innerText;
//     clickSize = false;
// }

// function clickToButtonSize () {
//     if(  clickSize == false ){
//         clickTrue();
//     }
//     else{
//         clickFalse();
//     }
// }

let slider = document.getElementById('slider');
let slidesContainer = slider.querySelector('ul');
let slides = slider.querySelectorAll('li');

let width = 520;
let count = 1;
let positionSlide = 0;
let counter = 0;

function prevSlide () {
    positionSlide = Math.min(positionSlide + width, 0);
    slidesContainer.style.marginLeft = positionSlide + 'px';
}

function nextSlide () {
    positionSlide = Math.max(positionSlide - width);
    slidesContainer.style.marginLeft = positionSlide + 'px';
    // if( slidesContainer.style.marginLeft > -520 + 'px' ){
    //     // positionSlide = 130;
    //     positionSlide = width;
    //     positionSlide = Math.max(positionSlide - width * count, -width * (slides.length - count));
    //     slidesContainer.style.marginLeft = positionSlide + 'px';
    // }
}

function shoesSlider () {
    let mainShoesSlide = document.getElementById('mainShoesSLide');
    let shoesSlide = document.getElementsByClassName('shoesSlide');
    for( let i = 0; i < shoesSlide.length; i++ ){
        shoesSlide[i].onclick = () => {
            mainShoesSlide.src = shoesSlide[i].src;
        }
    }
    itemsBasketObj.imgItem = mainShoesSlide.src;
}

function chooseShoesSize () {
    let sizeShoesContainer = document.getElementById('sizeContainer');
    let sizeShoesButton = sizeShoesContainer.getElementsByClassName('sizeItem');
    let counterSize = 1;
    
    for( let i = 0; i < sizeShoesButton.length; i++ ) {
        sizeShoesButton[i].onclick = () => {
            if( counterSize == 1 ){
                counterSize++;
                sizeShoesButton[i].style.backgroundColor = '#e5e5e5';
                itemsBasketObj.sizeItem = sizeShoesButton[i].innerText;
            }
            else{
                counterSize = 1;
                sizeShoesButton[i].style.backgroundColor = '#ffffff';
            }
        }
        itemsBasketObj.sizeItem = sizeShoesButton[i].innerText;
    }
}

function className ( className ) {
    className = document.getElementsByClassName(className);
    for( let i = 0; i <= className.length; i++ ) {
        return className[i];
    }
}

function addItemToBasket () {
    shoesSlider();
    itemsBasketObj.titleItem = className('titleItem').innerText;
    itemsBasketObj.numberItem = className('numberItem').innerText;
    chooseShoesSize ();
    // clickToButtonSize();
    itemsBasketObj.priceItem = className('priceItem').innerText;
    itemsBasketObj.quanityItem = '1';
}
addItemToBasket ();

function addedProduct () {
    alert( 'Вы добавили товар в корзину!' );
    location = '../html/shopping-bag.html';
}

function basket () {
    localStorage['sizeBasket'] = Number(localStorage.getItem('sizeBasket')) + 1;
    localStorage['quanityItem'] = Number(localStorage.getItem('quanityItem')) + 1;
    
    itemsBasket.push(itemsBasketObj);
    
    if( localStorage.getItem('itemsBasket') !== null || localStorage.getItem('itemsBasket') !== undefined ) {
        localStorage['itemsBasket'] = JSON.stringify(itemsBasket);
    }
    else{
        localStorage.setItem('itemsBasket', JSON.stringify(itemsBasket));
    }
    
}

function getSizeBasket () {
    let sizeBasket = localStorage.getItem('sizeBasket');
    return counterBlock.innerText = '(' + sizeBasket + ')';
}

function getQuanityBasket () {
    return localStorage.getItem('quanityItem');
}
