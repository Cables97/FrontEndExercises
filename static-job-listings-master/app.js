//import * as data from jsonDataURL;
const jsonDataURL = 'https://cables97.github.io/FrontEndExercises/static-job-listings-master/data.json';

//-------------------------------------
//Fetch JSON Data from Github Page
//-------------------------------------
async function fun() {
    return fetch(jsonDataURL).then(res => res.json());
    }
    const data  = await fun();
    console.log(data);

    
//-------------------------------------
//DOM Variables
//-------------------------------------


