//----------------------------
// DOM Variables
//----------------------------

const domQntyBtnInc = document.getElementById('qnty-plus') ;
const domQntyBtnDec = document.getElementById('qnty-minus');
const domQntyOutput = document.getElementById('qnty');

const domAddToCartBtn = document.getElementById('add-to-cart');



const domDiscountNotice = document.getElementById('price-discount-notice');
const domPrice = document.getElementById('sale-price');
const domFullPrice = document.getElementById('full-price');

const domProfileBtn = document.getElementById('profile-btn');

const domCartBtn = document.getElementById('cart-btn');
const domCart = document.getElementById('cart');
const domCartContents = document.getElementById('cart-contents');

const domSlideMain = document.getElementById('main-slide'); 
const domSlide1 = document.getElementById('slide1');
const domSlide2 = document.getElementById('slide2');
const domSlide3 = document.getElementById('slide3');
const domSlide4 = document.getElementById('slide4');
//----------------------------
// Global Variables
//----------------------------

let quantity = 1;

let cartVisBool = false;

let cartContents = []


//----------------------------
// Event Listeners
//----------------------------

domQntyBtnDec.addEventListener('click', quantityDec);
domQntyBtnInc.addEventListener('click', quantityInc);
domCartBtn.addEventListener('click', cartToggle);
domAddToCartBtn.addEventListener('click', addToCart)

//----------------------------
// onStart
//----------------------------

domQntyOutput.innerHTML = quantity;


//----------------------------
// functions
//----------------------------




function quantityInc(){
    if(quantity <= 5){
        quantity++;
    }

    domQntyOutput.innerHTML = quantity;
}

function quantityDec(){
    if(quantity >= 1){
        quantity--;
    }
    domQntyOutput.innerHTML = quantity;
}

function addToCart(){
    let itemName = document.getElementById('item-name').innerHTML;
    let itemPrice = 125;
    let itemPic = "./images/image-product-1.jpg";
    let deleteIcon = "./images/icon-delete.svg"


    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');


    let cartItemImg = document.createElement('img');
    cartItemImg.classList.add('cart-item-img');
    cartItemImg.src = itemPic;
    cartItem.prepend(cartItemImg);

    let cartItemInfo = document.createElement('div')
    cartItemInfo.classList.add('cart-item-info');

        let cartItemTitle = document.createElement('p')
        cartItemTitle.classList.add('cart-item-title')
        cartItemTitle.innerHTML = itemName;
        cartItemInfo.appendChild(cartItemTitle);

        let cartItemPricing = document.createElement('div');
        cartItemPricing.classList.add('cart-item-pricing');
            
            let cartItemPricingPer = document.createElement('p');
            cartItemPricingPer.classList.add('cart-item-pricing-per');
            cartItemPricingPer.innerHTML = '$' + formatter.format(itemPrice);
            cartItemPricing.appendChild(cartItemPricingPer);

            let cartItemPricingMulti = document.createElement('p');
            cartItemPricingMulti.innerHTML = 'x';
            cartItemPricing.appendChild(cartItemPricingMulti);

            let cartItemPricingQnty = document.createElement('p');
            cartItemPricingQnty.classList.add('cart-item-pricing-qnty');
            cartItemPricingQnty.innerHTML = quantity;
            cartItemPricing.appendChild(cartItemPricingQnty);

            let cartItemPricingTotal = document.createElement('p');
            cartItemPricingTotal.classList.add('cart-item-pricing-total');
            let itemPriceTotal = itemPrice * quantity;
            cartItemPricingTotal.innerHTML = '$' + formatter.format(itemPriceTotal);
            cartItemPricing.appendChild(cartItemPricingTotal);

        cartItemInfo.appendChild(cartItemPricing);
    cartItem.appendChild(cartItemInfo);
    
    let cartItemDelete = document.createElement('div');
    cartItemDelete.classList.add('cart-item-delete');
    cartItemDelete.classList.add('btn');
        let cartItemDeleteBtn = document.createElement('img');
        cartItemDeleteBtn.src = deleteIcon;
        cartItemDelete.appendChild(cartItemDeleteBtn);
    cartItem.appendChild(cartItemDelete);
    
    domCartContents.prepend(cartItem);
}

function cartToggle(){
    const cartcont = document.querySelector('.cart-container');
    console.log('boop')
    if (!cartVisBool){
        cartcont.style.display = 'inherit';
        console.log('boop1')
        console.log(cartcont)
        cartVisBool = true;
    } else{
        cartcont.style.display = 'none';
        console.log('boop2')
        console.log(cartcont)
        cartVisBool = false;
    }
}


const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });