
console.log("taco");

//import * as data from jsonDataURL;
const jsonDataURL = './src/data.json';

//-------------------------------------
//Fetch JSON Data from Github Page
//-------------------------------------
async function fun() {
  return fetch(jsonDataURL).then(res => res.json());
  }
  const data  = await fun();

console.log(data);


//-------------------------------------
// Destination 
//-------------------------------------

const destinations = data["destinations"]; 
const destBtns = document.getElementById("dest-btns").querySelectorAll(".dest-btn");

console.log(destBtns)

for(let i = 0 ; i < destBtns.length ; i++){
  console.log('click')
  destBtns[i].addEventListener("click", ()=>{
    destBtns.forEach(element => {
      element.classList.remove("nav-active")
    });
    changeDestination(destinations[i]);
    console.log(destinations[i]["name"]);
    destBtns[i].classList.add("nav-active")
  })
}

function changeDestination(destIndex){

  document.getElementById("dest-name").innerHTML = destIndex["name"];
  document.getElementById("dest-text").innerHTML = destIndex["description"];
  document.getElementById("dest-distance").innerHTML = destIndex["distance"];
  document.getElementById("dest-traveltime").innerHTML = destIndex["travel"];
  document.getElementById("dest-img").src = destIndex["images"]["webp"];
}


//-------------------------------------
// Crew 
//-------------------------------------
const crewMembers = data["crew"]; 
const crewBtns = document.getElementById("crew-bubbles").querySelectorAll(".bubble");



for(let i = 0 ; i < crewMembers.length ; i++){
  console.log('click')
  crewBtns[i].addEventListener("click", ()=>{
    crewBtns.forEach(element => {
      element.classList.remove("active")
    });
    changeCrew(crewMembers[i]);
    console.log(crewMembers[i]["name"]);
    crewBtns[i].classList.add("active")
  })
}


function changeCrew(crewIndex){
  document.getElementById("crew-name").innerHTML = crewIndex["name"];
  document.getElementById("crew-title").innerHTML = crewIndex["role"];
  document.getElementById("crew-bio").innerHTML = crewIndex["bio"];
  document.getElementById("crew-img").src = crewIndex["images"]["webp"];
}



//-------------------------------------
// Technology 
//-------------------------------------
const technology = data["technology"]; 
const techBtns = document.getElementById("tech-btns").querySelectorAll(".tech-btn");

for(let i = 0 ; i < technology.length ; i++){
  console.log('click')
  techBtns[i].addEventListener("click", ()=>{
    techBtns.forEach(element => {
      element.classList.remove("tech-active")
    });
    changeTech(technology[i]);
    console.log(technology[i]["name"]);
    techBtns[i].classList.add("tech-active")
  })
}

function changeTech(techIndex){
  document.getElementById("tech-name").innerHTML = techIndex["name"];
  document.getElementById("tech-desc").innerHTML = techIndex["description"];
  document.querySelector(':root').style.setProperty('--tech-img', "url(." + techIndex["images"]["portrait"] + ")"  );
  document.querySelector(':root').style.setProperty('--tech-img-m', "url(." + techIndex["images"]["landscape"] + ")"  );
}

//-------------------------------------
// Mobile Menu 
//-------------------------------------
let mobileHam = document.getElementById("menu-ham");
let mobileX = document.getElementById('menu-x');


let mobileOpen = false;
mobileHam.addEventListener("click", toggleMobileMenu);
mobileX.addEventListener("click", toggleMobileMenu);


function toggleMobileMenu(){
  console.log(mobileOpen);
  if(!mobileOpen){
    document.getElementById('mobile-nav').style.setProperty('display', "inherit");
    mobileOpen = true;
  }else{
    document.getElementById('mobile-nav').style.setProperty('display', "none"  );
    mobileOpen = false;
  }
}