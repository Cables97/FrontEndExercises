//--------------------------------------------------
// Drag and Drop
//--------------------------------------------------
const domList = document.getElementById("list");
new Sortable(domList, {
    animation: 150,
    ghostClass: 'background-tint',
    onChoose: function(e) {
        e.target.classList.add('grabbing');
    },
    onUnchoose: function(e) {
        e.target.classList.remove('grabbing');
    },
    onStart: function(e) {
        e.target.classList.add('grabbing');
    },
    onEnd: function(e) {
        e.target.classList.remove('grabbing');
    },
  onMove: function(e) {
        e.target.classList.add('grabbing');
    }
});

//--------------------------------------------------
// Input Parse
//--------------------------------------------------
const domInputBox = document.getElementById("input");
domInputBox.addEventListener("keydown", evt => {
    const key = evt.key; // const {key} = event; in ES6+
    if (key === "Enter") {
        inputParse();
    }
  });

function inputParse(){
    let toInput = domInputBox.value;
    if(toInput.length > 0){
        buildListItem(toInput);
        domInputBox.value = "";
    }
    
}

//--------------------------------------------------
// List Item Build
//--------------------------------------------------

function buildListItem(strToDO){
    const domList = document.getElementById("list")

    let liListItem = document.createElement("li");
    liListItem.classList.add("list-item");
    domList.append(liListItem);

        let labelCheck = document.createElement("label");
        labelCheck.classList.add("check");
        liListItem.append(labelCheck);

            let inputCheckbox = document.createElement("input");
            inputCheckbox.type = "checkbox";
            inputCheckbox.checked = false ;
            labelCheck.append(inputCheckbox);

            let spanCheck = document.createElement("span");
            spanCheck.classList.add("checkmark");
            labelCheck.append(spanCheck);

            spanCheck.addEventListener("click",()=>{
                if(inputCheckbox.checked){
                    liListItem.classList.remove("completed")
                } else{
                    liListItem.classList.add("completed")
                }
                remainingCheck();
            });

                let imgCheck = document.createElement("img");
                imgCheck.src = "./images/icon-check.svg";
                spanCheck.append(imgCheck);


        let pText = document.createElement("p");
        pText.innerHTML = strToDO;
        liListItem.append(pText);
        
        let divDelete = document.createElement("div");
        divDelete.classList.add("delete-btn");
        liListItem.append(divDelete);

        divDelete.addEventListener("click",()=>{
            liListItem.remove();
            remainingCheck();
        });

            let imgDelete = document.createElement("img");
            imgDelete.src = "./images/icon-cross.svg";
            divDelete.append(imgDelete);
    remainingCheck();
}


function remainingCheck(){
    let allItems = domList.getElementsByClassName("list-item").length;
    let completeItems = domList.getElementsByClassName("completed").length;
    let activeItems = allItems - completeItems;
    document.getElementById("items-left").innerHTML = activeItems + " items left";
}

//--------------------------------------------------
// Filter Toggles
//--------------------------------------------------

const domAllToggle = document.querySelectorAll(".toggle-all");
console.log(domAllToggle)
domAllToggle.forEach(e => {
    console.log("fa")
    e.addEventListener("click", ()=>{
        toggleList("all")
    })
    e.addEventListener("touch", ()=>{
        toggleList("all")
    })
})

const domActiveToggle = document.querySelectorAll(".toggle-active");
domActiveToggle.forEach(e => {
    e.addEventListener("click", ()=>{
        toggleList("active")
    })
    e.addEventListener("touch", ()=>{
        toggleList("active")
    })
})

const domCompletedToggle = document.querySelectorAll(".toggle-completed");
domCompletedToggle.forEach(e => {
    e.addEventListener("click", ()=>{
        toggleList("completed")
    })
    e.addEventListener("touch", ()=>{
        toggleList("completed")
    })
})


function toggleList(strToggle){
    let allItems = domList.querySelectorAll(".list-item");
    let completeItems = domList.querySelectorAll(".completed");

    allItems.forEach(element => {
            element.style.display = "flex"           
    });
            domAllToggle[0].classList.remove("on")
            domAllToggle[1].classList.remove("on")
            domCompletedToggle[0].classList.remove("on")
            domCompletedToggle[1].classList.remove("on")
            domActiveToggle[0].classList.remove("on")
            domActiveToggle[1].classList.remove("on")
    switch(strToggle){
        case "active": //shows all elements, hides the completed
            domActiveToggle[0].classList.add("on")
            domActiveToggle[1].classList.add("on")

            allItems.forEach(element => {
                if(element.classList.contains("completed")){
                    element.style.display = "none"
                }              
            });

        break;

        case "completed": //hides all elements, shows the completed
            domCompletedToggle[0].classList.add("on")
            domCompletedToggle[1].classList.add("on")

            allItems.forEach(element => {
                if(!element.classList.contains("completed")){
                    element.style.display = "none"
                }              
            });
            
        break;

        default:
            domAllToggle[0].classList.add("on")
            domAllToggle[1].classList.add("on")

        break;
    }

    console.log("Filter by" + strToggle);
}



//--------------------------------------------------
// Clear Completed
//--------------------------------------------------

document.getElementById("clear-completed").addEventListener("click", clearCompleted);

function clearCompleted(){
    const completeList = document.querySelectorAll(".completed");
    completeList.forEach(e => {
        e.remove();
    })
}

//--------------------------------------------------
// Start
//--------------------------------------------------

buildListItem("Complete online JavaScript course");
buildListItem("Jog around the park 5x");
buildListItem("10 minutes meditation");
buildListItem("Read for 1 hour");
buildListItem("Pick up groceries");
buildListItem("Complete Todo App on Frontend Mentor");


//--------------------------------------------------
// Dark mode
//--------------------------------------------------

document.getElementById("dark-mode-toggle").addEventListener("click", darkMode)

function darkMode(){
    let toggle = document.getElementById("dark-mode-toggle");

    if(document.body.classList.contains("darkmode")){
        document.body.classList.remove("darkmode");
        toggle.querySelectorAll("img")[0].src = "./images/icon-moon.svg"

    } else{
        document.body.classList.add("darkmode");
        toggle.querySelectorAll("img")[0].src = "./images/icon-sun.svg"


    }



    
}