window.onload = () => {
    getSizeBasket();
    getBasketItems();
    getBasketItemsPriceSum();
    checkLocalStorage();
    getQuanityBasket();
}

function getDefaultBasketValue () {
    localStorage.setItem('sizeBasket', '0');
    return counterBlock.innerText = '(' + localStorage.getItem('sizeBasket') + ')';
}

function getSizeBasket () {
    let sizeBasket = localStorage.getItem('sizeBasket');
    return counterBlock.innerText = '(' + sizeBasket + ')';
}

function addTag ( tag ) {
    return document.createElement(tag);
}

function getBasketItems () {
    if( localStorage.getItem('itemsBasket') !== null ) {
        let basketContainer = document.getElementById('basketContainer');
        let localGetItems = JSON.parse(localStorage.getItem('itemsBasket'));
        for( let i = 0; i < localGetItems.length; i++ ) {
            let rowBasket = addTag('tr');
                rowBasket.className = 'rowBasket';
                basketContainer.appendChild(rowBasket);

            let imgColumn = addTag('td');
            let imgItem = addTag('img');
                imgItem.style.backgroundImage = 'url(' + localGetItems[i].imgItem + ')';
                imgItem.className = 'shoesSlide';
                imgColumn.appendChild(imgItem);
                rowBasket.appendChild(imgColumn);

            let titleAndNumberColumn = addTag('td');
            let numberItem = addTag('p')
                numberItem.className = 'numberItem';
            let titleItem = addTag('h3');
                titleItem.className = 'titleItem';
                titleItem.innerHTML = localGetItems[i].titleItem;
                numberItem.innerHTML = localGetItems[i].numberItem;
                titleAndNumberColumn.appendChild(titleItem);
                titleAndNumberColumn.appendChild(numberItem);
                rowBasket.appendChild(titleAndNumberColumn);

            let colorColumn = addTag('td');
            let colorItem = addTag('span');
                colorItem.className = 'colorItem';
                colorItem.innerHTML = 'Black';
                colorColumn.appendChild(colorItem);
                rowBasket.appendChild(colorColumn);

            let sizeColumn = addTag('td');
            let sizeItem = addTag('span')
                sizeItem.className = 'sizeItem';
                sizeItem.innerHTML = localGetItems[i].sizeItem;
                sizeColumn.appendChild(sizeItem);
                rowBasket.appendChild(sizeColumn);
            
            let quanityColumn = addTag('td');
            let quanityUp = addTag('span');
                quanityUp.className = 'quanityUp';
                quanityColumn.appendChild(quanityUp);

            let quanityItem = addTag('span')
                quanityItem.className = 'quanityItem';
                quanityItem.innerHTML = '1';
                quanityColumn.appendChild(quanityItem);
                
            let quanityDown = addTag('span');
                quanityDown.className = 'quanityDown';
                quanityColumn.appendChild(quanityDown);
                rowBasket.appendChild(quanityColumn);
                    
            let priceColumn = addTag('td');
            let priceItem = addTag('span')
                priceItem.className = 'priceItem';
                priceItem.innerHTML = localGetItems[i].priceItem;
                priceColumn.appendChild(priceItem);
                rowBasket.appendChild(priceColumn);
            
            let deleteColumn = addTag('td');    
            let buttonDeleteItem = addTag('button');
                buttonDeleteItem.className = 'deleteItem';
                imgItem.style.backgroundImage = localGetItems[i].imgItem;
                buttonDeleteItem.innerHTML = '+';
                deleteColumn.appendChild(buttonDeleteItem);
                rowBasket.appendChild(deleteColumn);
                buttonDeleteItem.onclick = () => {
                    deleteBasketItem( rowBasket );
                }
        }
    }
    quanityUpDownItem();
}

function getBasketItemsPriceSum () {   
    let sumPrice = document.getElementById('sumPrice');
    let columnItem = [];
    let columnItemText = [];
    let sum = 0;
    
    if( localStorage.getItem('itemsBasket') !== null ) {
        let localGetItems = JSON.parse(localStorage.getItem('itemsBasket'));
        for( let i = 0; i < localGetItems.length; i++ ) {
            if( localGetItems[i].priceItem !== null ){
                columnItem.push(localGetItems[i].priceItem);
            }
        }

        for( let j = 0; j < columnItem.length; j++ ) {
            columnItemText.push(parseInt(columnItem[j].replace('€', '')));
        }
        
        for( let i = 0; i < columnItemText.length; i++ ){
            sum += columnItemText[i];
        }
    }
    return sumPrice.innerText = '€' + sum;
}

function deleteBasketItem ( deleteBlock ) { 
    let itemsBasket = JSON.parse(localStorage.getItem('itemsBasket'));
        itemsBasket.splice( 0,1 );
    localStorage.setItem('itemsBasket',JSON.stringify(itemsBasket));
    deleteBlock.style.display = 'none';

    localStorage['sizeBasket'] = Number(localStorage.getItem('sizeBasket')) - 1;
    counterBlock.innerText = '(' + localStorage.getItem('sizeBasket') + ')';
    getBasketItemsPriceSum();
}

function quanityUpDownItem () {
    let quanityItem = document.getElementsByClassName('quanityItem');
    let quanityUpItem = document.getElementsByClassName('quanityUp');
    let quanityDownItem = document.getElementsByClassName('quanityDown');
    
    let que = Number(localStorage.getItem('quanityItem')) + 1;
    for( let i = 0; i < quanityUpItem.length; i++ ) {
        let counter = 1;
        quanityUpItem[i].onclick = () => {
            for( let j = 0; j < quanityItem.length; j++ ) {
                if( i === j ) {
                    // quanityItem[j].innerText = ++counter;
                    let newQue = localStorage['quanityItem'] = que;
                    quanityItem[j].innerText = newQue;
                    localStorage['quanityItem'] = newQue;
                    let sizeBasket = localStorage['sizeBasket'] = Number(localStorage.getItem('sizeBasket')) + 1;
                    return counterBlock.innerText = '(' + sizeBasket + ')';
                }
            }
        }
    }

    for( let i = 0; i < quanityDownItem.length; i++ ) {
        quanityDownItem[i].onclick = () => {
            for( let j = 0; j < quanityItem.length; j++ ) {
                let counter = 1;
                if( i === j ) {
                    quanityItem[j].innerText = --counter;
                    let sizeBasket = localStorage['sizeBasket'] = Number(localStorage.getItem('sizeBasket')) - 1;
                    return counterBlock.innerText = '(' + sizeBasket + ')';
                }
            }
        }
    }
    // quanityItem.innerText = localStorage.getItem('sizeBasket');
    quanityItem.innerText = localStorage['sizeBasket'];
}

let buttonOrder = document.getElementById('orderNow');
buttonOrder.onclick = () => {
    displayModalWindow();
}

function displayModalWindow () {
    let containerModalWindow = document.getElementById('containerModalWindow');
    containerModalWindow.style.display = 'block';
}

function removeModalWindow () {
    let containerModalWindow = document.getElementById('containerModalWindow');
    containerModalWindow.style.display = 'none';
}

let closeModalWindow = document.getElementById('closeModalWindow');
closeModalWindow.onclick = () => {
    removeModalWindow();
    location = '../html/home.html';
    localStorage.clear();
}