//---------------------------------
// DOM Variables
//---------------------------------
const domAdvice = document.getElementById('advice');
const domAdviceID = document.getElementById('advice-id')
const domRefreshDice = document.getElementById('dice-wrapper')


//---------------------------------
// Global Variables
//---------------------------------
let advice = "Don't drink bleach." ;
let adviceID = 224 ;

//---------------------------------
// Event Listeners
//---------------------------------

domRefreshDice.addEventListener('click', () =>{
    console.log('btn pressed');
    refreshAdvice();
}
)


//---------------------------------
// On Start
//---------------------------------
window.onload = () =>{
    refreshAdvice();
    setAdvice();
}

//---------------------------------
// Functions
//---------------------------------

function refreshAdvice(){
    getAdvice();
    setAdvice();
}

function getAdvice(){
    console.log('advice fetch');
    fetch('https://api.adviceslip.com/advice')
    .then( (response) => {
        return response.json();
    })
    .then((quote) => {
        advice = quote.slip.advice;
        console.log(advice);
        adviceID = quote.slip.id;
        console.log(adviceID);
    })
}

function setAdvice(){
    domAdviceID.innerHTML = 'ADVICE #' +  adviceID ;
    domAdvice.innerHTML = '\"' + advice + '\"';
}

//refreshes every 30s
setInterval(refreshAdvice, 30000);