const titleBox = document.getElementById("title-box");
const taskBox = document.getElementById("task-box");
const listContainer = document.getElementById("list-container");
var currentdate = new Date();

function getdaytime()
{
    return "  (" + currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds() + ")";
}

function addTask(){
    if(titleBox.value === ''){
        alert("Title can't be empty!");
    }
    else if(taskBox.value === ''){
        alert("Task can't be empty!");
    }
    else{
        let li = document.createElement("li");
        let s=titleBox.value;
        s=s.concat(" :- ");
        s=s.concat(taskBox.value);
        s=s.concat(getdaytime());
        li.innerHTML = s;
        console.log(li.innerHTML);
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    titleBox.value="";
    taskBox.value="";
    saveData();
}

listContainer.addEventListener("click", 
    function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },
false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();