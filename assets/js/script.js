//var buttonEl = document.querySelector("#save-task"); //query selector is basically a search button in the document html and it will look for id save-task. We assigned this to a global variable because it will enhance the performance of the webpage.
var formEl = document.querySelector("#task-form"); // doing this so we can add an event listener to the entire form rather than just the button 
var tasksToDoEl = document.querySelector("#tasks-to-do"); // in the variable tasksToDoEl we are telling that variable to search the html document and to find an id that is tasks-to do

/*
buttonEl.addEventListener("click", function(){ // with the variable buttonEl that was assigned to the id of the button in html, we are telling it to listen for clicks. when a click happens, execute the function below
    var listItemEl = document.createElement("li"); //in the function we created a new variable called listItemEl which would create a new list (li) element in an html document 
    listItemEl.className = "task-item"; // then we say that we want the styling of this new list item to resemble to the styling off other list items in the html that are tagged under class = task-item
    listItemEl.textContent = "This is a new task"; // now that we have created a new list item and we have already styled its looks, we use text content to feed the content to that list item. In our case, its "this is a new task"
    tasksToDoEl.appendChild(listItemEl);// now that the element is fully ready to be "pushed out" to the existing list, we appendChild it to the variable tasksToDoEL which was assigned to the ul with id tasks-to-do. Append Child takes this new element and adds it to the bottom of the existing element. 
});
*/

//The above is replaced by below because it can be difficult adding so many event listners



/*var createTaskHandler = function(event){
    
    event.preventDefault(); // This prevents the page from refreshing itself. We need this because we don't need the browser to keep on refreshing. Since our work is in JS not in html, if we dont have this added, it will delete out our newly added elements in JS

    var taskNameInput = document.querySelector("input[name='task-name']").value; //in this we are searching HTML for input selector that has a name attribute set to a value of "task-name"
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    

    
    var listItemEl = document.createElement("li"); // creating a new element li in html document stored under variable listItemEl
    listItemEl.className = "task-item"; // giving it the same styling of existing list with class task-item
    
    var taskInfoEl = document.createElement("div"); // this creates a new div in html 
    taskInfoEl.className = "task-info"; // assigned it to a class of task-info

    //Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"; //InnerHTML works just like textConent except in textConent you can only put the text; and in innerHTML you can write HTML tags inside the string value we give like <h3>, etc.
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl); //this adds entire list item to list using appendChild 
    
    /*listItemEl.textContent = "This is a new task"; // putting contene in this newly created list element
    listItemEl.textContent = taskNameInput; // this pushes whatever the user enters in the taskNameInput which is stored in the value and then pushes it to the listItemEl
    tasksToDoEl.appendChild(listItemEl); // pushing this newly created element to tasksToDoEl that is linked to the original list. 
    
}

//buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", createTaskHandler); // because we are using the entire form this time, we cannot use click as an event listner. we use submit, which basically stands for on-submit in certail documents. Submit works when a user clicks button element with a type attribute that has a value of "submit" or when a user presses Enter on thier keyboard
*/

var taskFormHandler = function(event){
    
    event.preventDefault(); // This prevents the page from refreshing itself. We need this because we don't need the browser to keep on refreshing. Since our work is in JS not in html, if we dont have this added, it will delete out our newly added elements in JS

    var taskNameInput = document.querySelector("input[name='task-name']").value; //in this we are searching HTML for input selector that has a name attribute set to a value of "task-name"
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //This would check if the input fields are filled or are empty 
    // it is saying that IF either one or both the variables are not true (false), then proceed. 
    if (!taskNameInput || !taskTypeInput){ //the ! is NOT logic operator. this would check for false (opposite) value which means empty
        alert("You need to fill out the task form!");
        return false; 
    }

    //This would package up Data as an Object 
    var taskDataObj = {
        name: taskNameInput, //Name property
        type: taskTypeInput //Type property
    };

    formEl.reset(); //this simple line allows the formEL fields to reset (empty) after each time the "ADD TASK" button is pressed.  

    //Send the above as an argument to createTaskEl --> below
     createTaskEl(taskDataObj);
}

//This function would hold the code that creates a new task HTML element
var createTaskEl = function(taskDataObj){

    var listItemEl = document.createElement("li"); // creating a new element li in html document stored under variable listItemEl
    listItemEl.className = "task-item"; // giving it the same styling of existing list with class task-item
    
    var taskInfoEl = document.createElement("div"); // this creates a new div in html 
    taskInfoEl.className = "task-info"; // assigned it to a class of task-info

    
    //Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"; //InnerHTML works just like textConent except in textConent you can only put the text; and in innerHTML you can write HTML tags inside the string value we give like <h3>, etc.
    /* Here we update the innerHTML line from above commented part. We do this because we 
    want it to have a cleaner look overall and code less lines. So in this innerHTML we see
    that we pushed taskDataObj function as a variable into createTaskEl. Think of f(x) function. 
    then in the inner html in the div, we point towards .name for the task-name and 
    .type for type. REMEMBER whatever variable we create within curly brackets is only 
    valid within the curly brackets as they are local variables, not global. */
    
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl); //this adds entire list item to list using appendChild 
   
}

formEl.addEventListener("submit", taskFormHandler);