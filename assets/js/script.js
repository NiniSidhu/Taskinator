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



var createTaskHandler = function(event){
    
    event.preventDefault(); // This prevents the page from refreshing itself. We need this because we don't need the browser to keep on refreshing. Since our work is in JS not in html, if we dont have this added, it will delete out our newly added elements in JS

    var listItemEl = document.createElement("li"); // creating a new element li in html document stored under variable listItemEl
    listItemEl.className = "task-item"; // giving it the same styling of existing list with class task-item
    listItemEl.textContent = "This is a new task"; // putting contene in this newly created list element
    tasksToDoEl.appendChild(listItemEl); // pushing this newly created element to tasksToDoEl that is linked to the original list. 
    
}

//buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", createTaskHandler); // because we are using the entire form this time, we cannot use click as an event listner. we use submit, which basically stands for on-submit in certail documents. Submit works when a user clicks button element with a type attribute that has a value of "submit" or when a user presses Enter on thier keyboard
