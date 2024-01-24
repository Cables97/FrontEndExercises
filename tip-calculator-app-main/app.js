let tip = 0;

const domTipOutput = document.getElementById('tip-output');
const domTotalOutput = document.getElementById('total-output');
const domNumOfPeople = document.getElementById('num-ppl');

const domTip5 = document.getElementById('5');
const domTip10 = document.getElementById('10');
const domTip15 = document.getElementById('15');
const domTip25 = document.getElementById('25');
const domTip50 = document.getElementById('50');
const domTipCustom = document.getElementById('custom-tip');
const domReset = document.getElementById('reset-button')

let bill = document.getElementById('bill').value;
let numOfPeople = domNumOfPeople.value;



//if user clicks button, add active class. Set Tip to button value
domTip5.onclick = function(){
    tip = 0.05;
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    domTip5.classList.add('active');
    console.log('current tip = ' + tip)
    calculate();
  }; 

domTip10.onclick = function(){
    tip = 0.1;
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    domTip10.classList.add('active');
    console.log('current tip = ' + tip)
    calculate();
}; 
domTip15.onclick = function(){
    tip = 0.15;
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    domTip15.classList.add('active');
    console.log('current tip = ' + tip)
    calculate();
};
domTip25.onclick = function(){
    tip = 0.25
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    domTip25.classList.add('active');
    console.log('current tip = ' + tip)
    calculate();
};
domTip50.onclick = function(){
    tip = 0.5;
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    domTip50.classList.add('active');
    console.log('current tip = ' + tip)
    calculate();
};
domTipCustom.onclick = function(){
    tip = domTipCustom.value/100;
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    domTipCustom.classList.add('active');
    console.log('current tip = ' + tip)
    calculate();
};

domReset.onclick = function(){
    domNumOfPeople.value = 0;
    document.getElementById('bill').value = 0;
    tip = 0;
    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
    
};



setInterval(calculate,1000);



//if people is less than 1, add error class
//if bill is less than 0, add error class

// ((bill*tip)-bill) / numOfPeople == Tip/person
// (Bill * Tip) / numOfPeople == total/person

function calculate(){
    bill = document.getElementById('bill').value;
    numOfPeople = domNumOfPeople.value;

   //console.log(numOfPeople);
    if(numOfPeople <= 0 ){
        document.getElementById('not-zero').classList.add('not-zero');
        
    } else{
        document.getElementById('not-zero').classList.remove('not-zero');
    }
    tipPerPerson(bill, numOfPeople, tip);
    totalPerPerson(bill, numOfPeople, tip);
}


function tipPerPerson(bill, numOfPeople, tip){
    let tipOut = ((bill * tip) / numOfPeople);
    let tipRounded = Math.round(tipOut * 100) / 100
    
    if(!isFinite(tipRounded)){
        domTipOutput.innerHTML ='$0.00';
    }
    
    else{
        domTipOutput.innerHTML ='$' + (Math.round(tipRounded * 100) / 100).toFixed(2);
    }


}

function totalPerPerson(bill, numOfPeople, tip){

    let tipTotalOut = parseFloat(((bill * tip) / numOfPeople) + (bill/numOfPeople))
    

    if(!isFinite(tipTotalOut)){
        domTotalOutput.innerHTML ='$0.00';
    }else{
        domTotalOutput.innerHTML ='$' + (Math.round(tipTotalOut * 100) / 100).toFixed(2);
    }

}
