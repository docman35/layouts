window.onload = () => {
    calculateSumPricesProducts();
    counterOfBag();
}

function getProductsToLocalStorage () {
    if( localStorage.getItem('selectedProducts') !== null && localStorage.getItem('selectedProducts') !== undefined ) {
        return JSON.parse(localStorage.getItem('selectedProducts'));
    }
}

function calculateSumPricesProducts () {
    let pricesProducts = [];
    let calculateSum = [];
    let getSumPrices = 0;
    if( localStorage.getItem('selectedProducts') !== null && localStorage.getItem('selectedProducts') !== undefined ) {
        let selectedProducts = getProductsToLocalStorage();
        for( let i = 0; i < selectedProducts.length; i++ ) {
            pricesProducts.push(selectedProducts[i].productPrice);
        }

        for( let i = 0; i < pricesProducts.length; i++ ) {
            calculateSum.push(pricesProducts[i].replace(/[$£€]/g, ''));
        }
    
        for( let i = 0; i < calculateSum.length; i++ ) {
            getSumPrices += +calculateSum[i];
        }
            
        if ( localStorage.getItem('sumPricesProducts') !== null || localStorage.getItem('sumPricesProducts') !== undefined ) {
                localStorage.sumPricesProducts = getSumPrices.toFixed(2);
        }
        else {
            localStorage.setItem('sumPricesProducts', getSumPrices);
        }
    }
    else {
        return;
    }
}

function counterOfBag () {
    let counter = document.getElementById('counterBag');
    if( localStorage.getItem('counterOfBag') === null || localStorage.getItem('counterOfBag') === undefined ) {
        return localStorage.setItem('counterOfBag', 0);
    }
    else {
        if( localStorage.getItem('selectedProducts') === null || localStorage.getItem('selectedProducts') === undefined ) {
            return;
        }
        else {
            let selectedProducts = getProductsToLocalStorage();
            localStorage.counterOfBag = selectedProducts.length;
            counter.innerHTML = `£ ${localStorage.getItem('sumPricesProducts')} (${localStorage.getItem('counterOfBag')})`;
        }
    }
}


let sandwichValue = false;

function openSandwichMenu () {
    let sandwich = document.getElementById('sandwich');
        sandwich.style.transform = 'rotate(360deg)';
        sandwich.style.transition = '1s';
    let mobileMenu = document.getElementById('mainMenu');
        mobileMenu.style.display = 'block';
    let searchInputBlock = document.getElementById('searchInputBlock');
        searchInputBlock.style.display = 'flex';
        searchInputBlock.style.borderBottom = '1px solid lightgray';
    let headerTop = document.getElementById('headerTopItems');
        headerTop.style.borderBottom = '1px solid lightgray';

    sandwichValue = true;
}

function closeSandwichMenu () {
    let sandwich = document.getElementById('sandwich');
        sandwich.style.transform = 'rotate(-360deg)';
        sandwich.style.transition = '1s';
    let mobileMenu = document.getElementById('mainMenu');
        mobileMenu.style.display = 'none';
    let searchInputBlock = document.getElementById('searchInputBlock');
        searchInputBlock.style.display = 'none';
        searchInputBlock.style.borderBottom = 'none';
    let headerTop = document.getElementById('headerTopItems');
        headerTop.style.borderBottom = 'none';

    sandwichValue = false;
}

function checkSandwichValue () {
    if( sandwichValue == true ) {
        closeSandwichMenu();
    }
    else {
        openSandwichMenu();
    }
}


let inputSearchValue = false;

function openInputSearch () {
    let searchButton = document.getElementById('searchButton');
    let inputSearch = document.getElementById('inputSearch');
    let searchInputBlock = document.getElementById('searchInputBlock');
    if( window.matchMedia("(width: 768px)").matches ) {
        inputSearch.style.display = 'block';
        searchInputBlock.style.borderBottom = '1px solid lightgray';
    }
    
    inputSearchValue = true;
}

function closeInputSearch () {
    let searchButton = document.getElementById('searchButton');
    let inputSearch = document.getElementById('inputSearch');  let searchInputBlock = document.getElementById('searchInputBlock');
    if( window.matchMedia("(width: 768px)").matches ) {
        inputSearch.style.display = 'none';
        searchInputBlock.style.borderBottom = 'none';
    }

    inputSearchValue = false;
}

function checkInputSearchValue () {
    if ( inputSearchValue == true ) {
        closeInputSearch();
    }
    else {
        openInputSearch();
    }
}

let blockViewItemValue = false;

let parentEvents = document.querySelector('main');
    parentEvents.addEventListener('mouseover', blockViewItemDelegation);
    parentEvents.addEventListener('mouseout', blockViewItemDelegation);

function blockViewItemDelegation (event) {
    let target = event.target;
    let elements = target.closest('.viewItem');

    if( elements ) {
        let insideEl = elements.querySelector('.blockViewItem');
        if( blockViewItemValue === false ) {
            insideEl.style.display = 'flex';
            blockViewItemValue = true;
        }
        else {
            insideEl.style.display = 'none';
            blockViewItemValue = false;
        }
    }
}