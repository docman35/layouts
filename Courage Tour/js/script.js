function slider () {
    let header = document.querySelector('header');
    let buttons = document.getElementById('slider').children;
    for( let i = 0; i < buttons.length; i++ ) {
        buttons[i].onclick = () => {
            header.style.backgroundImage = `url(../img/slide_${i}.png)`;
            header.style.transition = '.5s';
            console.log(header.style.backgroundImage.innerHTML)
        }
    }
}

slider();

let counter = 0;

function sliderAnimation () {
    let header = document.querySelector('header');
    if( counter === 4 ) {
        counter = -1;
    }
    else {
        counter++;
        header.style.backgroundImage = `url(../img/slide_${counter}.png)`;
        header.style.webkitTransition = '1s';
        header.style.transition = '1s';
        header.style.mozTransition = '1s';
    }
}

if( window.matchMedia("(min-width: 993px)").matches ) {
    setInterval( () => sliderAnimation(), 5000);
}

let mainMenuValue = false;

const mainMenu = document.getElementById('mainMenu');
    mainMenu.addEventListener('click', delegationMainMenu);

function delegationMainMenu (event) {
    let target = event.target;
    let elements = target.closest('.deleg');

    if( elements ) {
        let insideEl = elements.querySelector('ul');
        if( mainMenuValue === false ) {
            insideEl.style.display = 'flex';
            mainMenuValue = true;
        }
        else {
            insideEl.style.display = 'none';
            mainMenuValue = false;
        }
    }
}

let countryMenuValue = false;

function countryDropDownMenuOpen () {
    let dropDownMenuCountries = document.getElementById('dropDownMenuCountries');
    dropDownMenuCountries.style.display = 'block';
    countryMenuValue = true;
}
function countryDropDownMenuClose () {
    let dropDownMenuCountries = document.getElementById('dropDownMenuCountries');
    dropDownMenuCountries.style.display = 'none';
    countryMenuValue = false;
}

function checkValueCountryDropDownMenu () {
    if ( countryMenuValue === true ) {
        countryDropDownMenuClose();
    }
    else {
        countryDropDownMenuOpen();
    }
}

let sandwichValue = false;

function openSandwichMenu () {
    let sandwich = document.getElementById('sandwich');
        sandwich.style.transform = 'rotate(360deg)';
    let mobileMenu = document.getElementById('blockSandwichMenu');
        mobileMenu.style.marginRight = '0';

    sandwichValue = true;
}
    
function closeSandwichMenu () {
    let sandwich = document.getElementById('sandwich');
        sandwich.style.transform = 'rotate(-360deg)';
    let mobileMenu = document.getElementById('blockSandwichMenu');
        mobileMenu.style.marginRight = '-200px';
        
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