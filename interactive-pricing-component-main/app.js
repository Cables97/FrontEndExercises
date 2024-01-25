// when billing is checked, discount is visible

//output is based on the slider value

//slider background is based on slider value/
//---------------------------
// DOM Variables
//---------------------------

const domSlider = document.getElementById('slider');
const domBillingToggle = document.getElementById('toggle');
const domDiscount = document.getElementById('discount-popup');

const domPageViews = document.getElementById('pageviews');
const domOutput = document.getElementById('output');

domBillingToggle.addEventListener('click', billingToggle);
domSlider.addEventListener('click', sliderControl)



function billingToggle(){
    console.log('toggle hit');
    if (domBillingToggle.checked){
        console.log('toggle on');
        domDiscount.style.display = 'flex';
        domOutput.style.color = 'hsl(15, 100%, 70%)';
        sliderControl();
    }
    if (!domBillingToggle.checked){
        console.log('toggle off');
        domDiscount.style.display = 'none';
        domOutput.style.color = 'black';
        sliderControl();
    }
}
setInterval(sliderControl,1000);

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

function sliderControl(){
    let pageviews = 0;
    let permonth = 0;
    console.log(domSlider.value)

    switch(domSlider.value){
        case '1':
            pageviews = '10K';
            permonth = 8.00;
        break;
        case '2':
            pageviews = '50K';
            permonth = 12.00;
        break;
        case '3':
            pageviews = '100K';
            permonth = 16.00;
        break;
        case '4':
            pageviews = '500K';
            permonth = 24.00;
        break;
        case '5':
            pageviews = '1M';
            permonth = 36.00;
        break;
        default:
            pageviews = '10K';
            permonth = 8.00;
        break;
    }

    domPageViews.innerHTML = pageviews + ' PAGEVIEWS';

    let outputVal = 0;
    if(domBillingToggle.checked){
        outputVal = permonth * 0.75;
        domOutput.style.color = 'hsl(15, 100%, 70%)';
    } else if(!domBillingToggle.checked){
        outputVal = permonth;
        domOutput.style.color = 'black';
    }



    domOutput.innerHTML = '$' + formatter.format(outputVal);


}



/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/