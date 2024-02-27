//when go is clicked, take the string within the text field.
//Validate it with RegEx
//If flagged, add invalid and inactive classes. If good, remove them. 






//-------------------------------
//DOM Variables
//-------------------------------
let domSubmitBtn  = document.getElementById('submit-btn');
let domEmailBar = document.getElementById('email-bar');

const domValidTxt = document.getElementById('valid-txt');
const domInvalidTxt = document.getElementById('invalid-txt');

const domReviewMobile1 = document.getElementById('review-1');
const domReviewMobile2 = document.getElementById('review-2');
const domReviewMobile3 = document.getElementById('review-3');
const domReviewMobile4 = document.getElementById('review-4');

const domCircleBtn1 = document.getElementById('cir-btn-1');
const domCircleBtn2 = document.getElementById('cir-btn-2');
const domCircleBtn3 = document.getElementById('cir-btn-3');
const domCircleBtn4 = document.getElementById('cir-btn-4');

const domHamMenu = document.getElementById('ham-menu');
const domMobileMenu = document.getElementById('mobile-menu');
const domMobileMenuClose = document.getElementById('menu-close');


//-------------------------------
//Global Variables
//-------------------------------

//RegEx taken from Online
let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");



//-------------------------------
//Event Listeners
//-------------------------------

domSubmitBtn.addEventListener('click', emailValidator)


domCircleBtn1.addEventListener('click', ()=>{
    circleActiveToggle(domCircleBtn1);
    elementActive(domReviewMobile1);
    elementInactive(domReviewMobile2);
    elementInactive(domReviewMobile3);
    elementInactive(domReviewMobile4);
} )

domCircleBtn2.addEventListener('click', ()=>{
    circleActiveToggle(domCircleBtn2);
    elementActive(domReviewMobile2);
    elementInactive(domReviewMobile1);
    elementInactive(domReviewMobile3);
    elementInactive(domReviewMobile4);
} )

domCircleBtn3.addEventListener('click', ()=>{
    circleActiveToggle(domCircleBtn3);
    elementActive(domReviewMobile3);
    elementInactive(domReviewMobile2);
    elementInactive(domReviewMobile1);
    elementInactive(domReviewMobile4);
} )

domCircleBtn4.addEventListener('click', ()=>{
    circleActiveToggle(domCircleBtn4);
    elementActive(domReviewMobile4);
    elementInactive(domReviewMobile2);
    elementInactive(domReviewMobile3);
    elementInactive(domReviewMobile1);
} )

domHamMenu.addEventListener('click', () =>{
    elementActive(domMobileMenu);
    elementInactive(domHamMenu);
})

domMobileMenuClose.addEventListener('click', () =>{
    elementInactive(domMobileMenu);
    elementActive(domHamMenu);
})

//-------------------------------
//Functions
//-------------------------------


//Checks the Email, if valid: shows the valid text. else show invalid. Disappear text after 2s.
function emailValidator(){
    let emailToTest = domEmailBar.value;
    let validCheck = emailTest(emailToTest);

    if(validCheck){
        elementActive(domValidTxt);
        elementInactive(domInvalidTxt);

    }else{
        elementActive(domInvalidTxt);
        elementInactive(domValidTxt);
    }

    setTimeout(()=>{
        elementInactive(domValidTxt);
        elementInactive(domInvalidTxt);

    }, 2000);
}



function elementActive(el){
    el.classList.add('active');
    el.classList.remove('inactive');
}


function elementInactive(el){
    el.classList.remove('active');
    el.classList.add('inactive');
}


function circleActiveToggle(el){
    domCircleBtn1.classList.remove('circle-active');
    domCircleBtn2.classList.remove('circle-active');
    domCircleBtn3.classList.remove('circle-active');
    domCircleBtn4.classList.remove('circle-active');

    el.classList.add('circle-active');
}




function emailTest(email){
    console.log('email is: ' + regex.test(email))
    return regex.test(email);
}
