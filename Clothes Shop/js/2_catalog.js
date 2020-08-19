let dropDownMenuValue = {}

function mouseOverOutSortMenu () {
    let dropDownMenu = document.getElementsByClassName('dropDownMenu');

    for( let i = 0; i < dropDownMenu.length; i++ ) {
        dropDownMenu[i].parentNode.onmouseover = () => {
            dropDownMenu[i].style.display = 'flex';
        }
        dropDownMenu[i].parentNode.onmouseout = () => {
            dropDownMenu[i].style.display = 'none';
        }
    }
}

mouseOverOutSortMenu();

function setSortName () {
    let dropDownMenuItems = document.querySelectorAll('.dropDownMenu li');
    let dropDownMenuTitleItems = document.querySelectorAll('.dropDownMenu li h4');
    
    for ( let i = 0; i < dropDownMenuItems.length; i++ ) {
        dropDownMenuItems[i].onclick = () => {
            for( let j = 0; j < dropDownMenuTitleItems.length; j++ ) {
                if( i === j ) {
                    dropDownMenuValue.titleItem = dropDownMenuTitleItems[j].innerHTML;
                }
            }
            checkSortName();
        }
    }
}
setSortName();

function getSortName () {
    let dropDownMenu = document.getElementsByClassName('dropDownMenu');

    for( let i = 0; i < dropDownMenu.length; i++ ) {
        let selectedSortName = document.createElement('p');
        selectedSortName.className = 'selectedSorting';
        selectedSortName.innerText = dropDownMenuValue.titleItem;
        dropDownMenu[i].parentNode.insertBefore(selectedSortName, dropDownMenu[i]);
        dropDownMenu[i].parentNode.style.backgroundColor = 'rgb(247,247,247)';
        dropDownMenu[i].parentNode.querySelector('.titleButtonSorting').style.fontSize = '14px';
        dropDownMenu[i].parentNode.querySelector('.titleButtonSorting').style.paddingTop = '10px';  
        dropDownMenu[i].style.display = 'none';    
    }
}

function checkSortName () {
    let selectedSortName = document.querySelectorAll('.selectedSorting');

    if( selectedSortName.length == 0 ) {
        getSortName();
    }
    else{
        selectedSortName[0].innerHTML = dropDownMenuValue.titleItem;
    }
}

let tabletSortMenuValue = false;

function openTabletSortMenu () {
    let sortMenuItems = document.getElementById('sortMenu');
    sortMenuItems.style.display = 'flex';
    let tabletSortMenuArrow = document.getElementById('tabletSortMenuArrow');
    tabletSortMenuArrow.innerHTML = 'x';
    tabletSortMenuArrow.style.color = 'red';
    if( window.matchMedia("(max-width: 768px)").matches ) {
        tabletSortMenuArrow.style.top = '17px';
        tabletSortMenuArrow.style.right = '50px';    
    }
    if( window.matchMedia("(max-width: 376px)").matches ) {
        tabletSortMenuArrow.style.top = '5px';
        tabletSortMenuArrow.style.right = '30px';
    }
    
    tabletSortMenuValue = true;
}

function closeTabletSortMenu () {
    let sortMenuItems = document.getElementById('sortMenu');
    sortMenuItems.style.display = 'none';
    let tabletSortMenuArrow = document.getElementById('tabletSortMenuArrow');
    tabletSortMenuArrow.innerHTML = '^';
    tabletSortMenuArrow.style.color = 'black';
    if( window.matchMedia("(max-width: 768px)").matches ) {
        tabletSortMenuArrow.style.top = '13px';
        tabletSortMenuArrow.style.right = '200px';
    }
    if( window.matchMedia("(max-width: 376px)").matches ) {
        tabletSortMenuArrow.style.top = '0';
        tabletSortMenuArrow.style.right = '30px';
    }
    
    tabletSortMenuValue = false;
}

function checkTabletSortMenuValue () {
    if ( tabletSortMenuValue == true ) {
        closeTabletSortMenu();
    }
    else {
        openTabletSortMenu();
    }
}