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
        addStringToArray(false, toInput);
        domInputBox.value = "";
    }
}

let localFix = ''
let arrayToDoList = [];
loadLocal();




//--------------------------------------------------
// List Item Build
//--------------------------------------------------

function buildListItem(boolCheck, strToDO){
    const domList = document.getElementById("list")

    let liListItem = document.createElement("li");
    liListItem.classList.add("list-item");
    domList.append(liListItem);

        let labelCheck = document.createElement("label");
        labelCheck.classList.add("check");
        liListItem.append(labelCheck);

            let inputCheckbox = document.createElement("input");
            inputCheckbox.type = "checkbox";
            inputCheckbox.classList.add("checkbox")

            if(boolCheck){
                inputCheckbox.checked = true ;
                liListItem.classList.add("completed")
            }else{
                inputCheckbox.checked = false ;
                liListItem.classList.remove("completed")
            }

            labelCheck.append(inputCheckbox);

            let spanCheck = document.createElement("span");
            spanCheck.classList.add("checkmark");
            labelCheck.append(spanCheck);

            spanCheck.addEventListener("click",()=>{
                checkItem(liListItem);
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
            removeItem(liListItem);
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


//--------------------------------------------------
// Adding to Array/List
//--------------------------------------------------
function addStringToArray(bool, str){
    console.log(str);
    let toDo = [bool, str];
    console.log(toDo);
    arrayToDoList.push(toDo);
    buildListItem(toDo[0], toDo[1]);
    saveLocal();
    console.log(arrayToDoList);
}


//--------------------------------------------------
// Remove from Array/List
//--------------------------------------------------

function removeItem(el){
    removeStringFromArray(el.querySelectorAll('p')[0].innerHTML);
    el.remove();
    remainingCheck();
    console.log("removing element")
    saveLocal();
}

function removeStringFromArray(str) {
    for (let i = 0; i < arrayToDoList.length; i++) {
        if (arrayToDoList[i][1] === str) {
            arrayToDoList.splice(i, 1);
        }
    }
}

//--------------------------------------------------
// Checkbox
//--------------------------------------------------

function checkItem(el){
    let boolValue = false;
    let targetString = el.querySelectorAll('p')[0].innerHTML;
    let inputCheckbox = el.getElementsByClassName("checkbox")[0];

    if(!inputCheckbox.checked){
        el.classList.add("completed")
        boolValue = true;
    } else{
        el.classList.remove("completed")
        boolValue = false;
    }

    for (let i = 0; i < arrayToDoList.length; i++) {
        if (arrayToDoList[i][1] === targetString) {
            arrayToDoList[i][0] = boolValue;
        }
    }
    saveLocal();
    remainingCheck();
}


//--------------------------------------------------
// local Storage
//--------------------------------------------------

document.getElementById("clear").addEventListener('click', ()=>{
    let clear = [];
    console.log(arrayToDoList);
    localStorage["to-do-list"] = JSON.stringify(clear)
    loadLocal();
    window.location.reload();
})


function saveLocal(){
    localStorage["to-do-list"] = JSON.stringify(arrayToDoList)
    console.log("saving" + arrayToDoList);
}

function loadLocal(){
    let arrayToDoList = [];
    let local = JSON.parse(localStorage["to-do-list"])
    console.log("local" + local);


    arrayToDoList = local;
    console.log(arrayToDoList);

    arrayToDoList.forEach(element => {
        addStringToArray(element[0], element[1])
    });
}