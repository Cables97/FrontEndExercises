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

let domFltrFrontEnd = document.getElementById('frontend-filter');

let domFltrSenior = document.getElementById('all-filter');


//-------------------------------------
//Global Variables
//-------------------------------------

let arrFilterList = [];

//-------------------------------------
//Event Listeners
//-------------------------------------



//-------------------------------------
//functions
//-------------------------------------
//build postings
data.forEach(e => {
    console.log('jobs loaded');
    buildPostings(e);
});

filterSelection("all")


//builds each job posting based on indiv JSON objects
function buildPostings(e){
    let jobPosting = document.createElement("div");
    jobPosting.classList.add("job-posting");
    jobPosting.classList.add("filterDiv");

    jobPosting.classList.add(e.level.toLowerCase());
    jobPosting.classList.add(e.role.toLowerCase());

    e.languages.forEach(element => {
        jobPosting.classList.add(element.toLowerCase());
    });

    e.tools.forEach(element => {
        jobPosting.classList.add(element.toLowerCase());
    });

    document.getElementById('posting-board').append(jobPosting);

    //logo img
    let jobLogo = document.createElement("img");
    jobLogo.classList.add("logo");
    jobLogo.src = e.logo;
    jobPosting.prepend(jobLogo);

    //posting info wrapper
    let jobPostingInfo = document.createElement("div");
    jobPostingInfo.classList.add('posting-info');
    jobPosting.append(jobPostingInfo);

        //company/tag wrapper
        let jobTitleWrapper = document.createElement('div');
        jobTitleWrapper.classList.add('title-wrapper');
        jobPostingInfo.append(jobTitleWrapper);

            let jobCompany = document.createElement('h2');
            jobCompany.innerHTML = e.company;
            jobTitleWrapper.append(jobCompany);

            if(e.new == true){
                let jobTagNew = document.createElement('div')
                jobTagNew.classList.add("new");
                jobTagNew.classList.add("tag");
                jobTagNew.innerHTML = 'NEW!';
                jobTitleWrapper.append(jobTagNew);
            }

            if(e.featured == true){
                let jobTagFeat = document.createElement('div');
                jobTagFeat.classList.add("featured");
                jobTagFeat.classList.add("tag");
                jobTagFeat.innerHTML = 'FEATURED';
                jobTitleWrapper.append(jobTagFeat);

                let jobTagFeatBar = document.createElement('div');
                jobTagFeatBar.classList.add("featured-bar");
                jobPosting.append(jobTagFeatBar);
        

            }
        //job position
        let jobPosition = document.createElement('h1');
        jobPosition.innerHTML = e.position;
        jobPostingInfo.append(jobPosition);
        //job subinfo
        let jobSubInfo = document.createElement('div');
        jobSubInfo.classList.add('sub-info');
        jobPostingInfo.append(jobSubInfo);
            //posted date
            let jobPostDate = document.createElement('p')
            jobPostDate.innerHTML = e.postedAt;
            jobSubInfo.append(jobPostDate);

            let jobCenterDot1 = document.createElement('p')
            jobCenterDot1.classList.add('center-dot');
            jobCenterDot1.innerHTML = '.';
            jobSubInfo.append(jobCenterDot1);
            //contract length
            let jobContract = document.createElement('p')
            jobContract.innerHTML = e.contract;
            jobSubInfo.append(jobContract);

            let jobCenterDot2 = document.createElement('p')
            jobCenterDot2.classList.add('center-dot');
            jobCenterDot2.innerHTML = '.';
            jobSubInfo.append(jobCenterDot2);
            //location
            let jobLocation = document.createElement('p')
            jobLocation.innerHTML = e.location;
            jobSubInfo.append(jobLocation);

    
    let jobLineSplit = document.createElement("div");
    jobLineSplit.classList.add('linesplit');
    jobPosting.append(jobLineSplit);
    //tag wrapper
    let jobTagWrapper = document.createElement("div");
    jobTagWrapper.classList.add('tag-wrapper');
    jobPosting.append(jobTagWrapper);
        //Role Tags
        let jobTagRole = document.createElement('div');
        jobTagRole.classList.add('tag-btn');
        jobTagWrapper.append(jobTagRole);

        jobTagRole.addEventListener('click', () =>{
          console.log('clicked: ' + e.role.toLowerCase())
          filterSelection(e.role);
        })

            let jobTagRoleTxt = document.createElement('p')
            jobTagRoleTxt.innerHTML = e.role;
            jobTagRole.append(jobTagRoleTxt);
        //job level tags
        let jobTagLevel = document.createElement('div');
        jobTagLevel.classList.add('tag-btn');
        jobTagWrapper.append(jobTagLevel);

        jobTagLevel.addEventListener('click', () =>{
          console.log('clicked: ' + e.level.toLowerCase())
          filterSelection(e.level);
        })

            let jobTagLevelTxt = document.createElement('p')
            jobTagLevelTxt.innerHTML = e.level;
            jobTagLevel.append(jobTagLevelTxt);

        //languages tags
        e.languages.forEach(element => {
            let jobTag = document.createElement('div');
            jobTag.classList.add('tag-btn');
            jobTagWrapper.append(jobTag);

            //Add event listener to each button that attaches a Filter Function
            jobTag.addEventListener('click', () =>{
              console.log('clicked: ' + element)
              filterSelection(element);
            })
    
                let jobTagTxt = document.createElement('p')
                jobTagTxt.innerHTML = element;
                jobTag.append(jobTagTxt);
        });

        //tools tags
        e.tools.forEach(element => {
            let jobTag = document.createElement('div');
            jobTag.classList.add('tag-btn');
            jobTagWrapper.append(jobTag);

            //Add event listener to each button that attaches a Filter Function
            jobTag.addEventListener('click', () =>{
              console.log('clicked: ' + element)
              filterSelection(element);
            })
    
                let jobTagTxt = document.createElement('p')
                jobTagTxt.innerHTML = element;
                jobTag.append(jobTagTxt);
        });



}

function filterList(){
  console.log('filter list: ' + arrFilterList);
  let domFilterBar = document.getElementById('filter-bar');
  domFilterBar.innerHTML = '';
    arrFilterList.forEach(element => {

      let filterBtn = document.createElement('div')
      filterBtn.classList.add('filter-btn')
      domFilterBar.append(filterBtn);

      filterBtn.addEventListener('click', () =>{
        filterListRemove(element);
        console.log('filter list: ' + arrFilterList);
        filterBtn.remove();
      })

      let filterBtnTxt = document.createElement('p')
      filterBtnTxt.innerHTML = element;
      filterBtn.append(filterBtnTxt);

      let filterBtnCancel = document.createElement('div')
      filterBtnCancel.classList.add('cancel-btn')
      filterBtn.append(filterBtnCancel);

      let filterBtnCancelImg= document.createElement('img')
      filterBtnCancelImg.src = "./images/icon-remove.svg";
      filterBtnCancel.append(filterBtnCancelImg);

  });
}

function filterListAdd(e){
  if (!arrFilterList.includes(e)){
    console.log('filter item added: ' + e)
    arrFilterList.push(e);
    console.log('filter list: ' + arrFilterList)
  }
  filterList();
}

function filterListRemove(e){
  console.log('filter item removed: ' + e)
  arrFilterList.splice(arrFilterList.indexOf(e),1);
  filterList();
}


function filterSelection(filter) {
  let x = document.getElementsByClassName("job-posting");
  let c = filter.toLowerCase();

  filterListAdd(filter);


  console.log('filtering: ' + c);
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (let i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  element.classList.add(name);
}

// Hide elements that are not selected
function removeClass(element, name) {
  element.classList.remove(name);
}
