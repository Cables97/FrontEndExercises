
import {data}  from './data.js';

//--------------------------------
// DOM Variables
//--------------------------------

const domDailyBtn = document.getElementById('daily');
const domWeeklyBtn = document.getElementById('weekly');
const domMonthlyBtn = document.getElementById('monthly');

let selector = 'weekly'


const dataBank = data;

console.log(dataBank.length);



domDailyBtn.addEventListener("click", () => {
    selector = 'daily'
        topicSet();
    domMonthlyBtn.classList.remove('active');
    domWeeklyBtn.classList.remove('active');
    domDailyBtn.classList.add('active');

}); 

domWeeklyBtn.addEventListener("click", () => {
    selector = 'weekly'
    topicSet();
    domMonthlyBtn.classList.remove('active');
    domDailyBtn.classList.remove('active');
    domWeeklyBtn.classList.add('active');

}); 

domMonthlyBtn.addEventListener("click", () => {
    selector = 'monthly'
    topicSet();
    domDailyBtn.classList.remove('active');
    domWeeklyBtn.classList.remove('active');
    domMonthlyBtn.classList.add('active');

}); 


//loops through objects within dataBank
function topicSet()
{
    //loops through objects within dataBank
    for(var r of dataBank)
    {
        let title = r.title;
        let hours = r.timeframes[selector].current;
        let pastHours = r.timeframes[selector].previous; 

        //dynamically set ID based on object title
        let hoursID = (title+'-hours').toLowerCase();
        let subID = (title+'-subtitle').toLowerCase();

        console.log(hoursID, subID);

        let domHours = document.getElementById(hoursID);
        let domSubtitle = document.getElementById(subID);

        domHours.innerHTML = hours +'hrs';

        if(selector == 'monthly'){
            domSubtitle.innerHTML = 'Last Month - '+ pastHours + 'hrs';
        }else if(selector == 'weekly'){
            domSubtitle.innerHTML = 'Last Week - '+ pastHours + 'hrs';

        }else if(selector == 'daily')
        domSubtitle.innerHTML = 'Yesterday - '+ pastHours + 'hrs';
    }
    
    return null;

}
