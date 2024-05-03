
  //import * as data from jsonDataURL;
const jsonDataURL = 'https://cables97.github.io/FrontEndExercises/space-tourism-website-main/data.json';

//-------------------------------------
//Fetch JSON Data from Github Page
//-------------------------------------
async function fetchData() {
    return fetch(jsonDataURL).then(res => res.json());
    }

    const data  = await fetchData();

console.log(data);


//-------------------------------------
// Destination 
//-------------------------------------

const destinations = data["destinations"]; 
const destBtns = document.getElementsByClassName("dest-btn")




function changeDestination(destIndex){
  document.getElementById("dest-name").innerHTML = destIndex["name"];
  document.getElementById("dest-text").innerHTML = destIndex["description"];
  document.getElementById("dest-distance").innerHTML = destIndex["distance"];
  document.getElementById("dest-traveltime").innerHTML = destIndex["travel"];
  document.getElementById("dest-img").innerHTML = destIndex["images"]["webp"];
}


//-------------------------------------
// Crew 
//-------------------------------------
const crewMembers = data["crew"]; 



function changeCrew(crewIndex){
  document.getElementById("crew-name").innerHTML = crewIndex["name"];
  document.getElementById("crew-title").innerHTML = crewIndex["role"];
  document.getElementById("crew-bio").innerHTML = crewIndex["bio"];
  document.getElementById("crew-img").innerHTML = crewIndex["images"]["webp"];
}



//-------------------------------------
// Technology 
//-------------------------------------
const technology = data["technology"]; 



function changeTech(techIndex){
  document.getElementById("tech-name").innerHTML = crewIndex["name"];
  document.getElementById("tech-dec").innerHTML = crewIndex["description"];
  document.querySelector(':root').style.setProperty('--tech-img', "url(" + crewIndex["images"]["portrait"] + ")"  );
  document.querySelector(':root').style.setProperty('--tech-img-m', "url(" + crewIndex["images"]["landscape"] + ")"  );
}
