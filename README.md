# TODO-APP GO TO my-new-branch to see the code
Basics JS code for Beginners
# JavaScript TODO Website

Welcome to the JavaScript TODO Website project! This is a simple and interactive TODO list application for beginners. The project demonstrates basic JavaScript functionalities including DOM manipulation, event handling, and basic styling with CSS.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as complete

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Bhanu-partap-13/TODO-APP.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd TODO-APP
    ```

3. **Open `index.html` in your web browser** to view the TODO list application.

## Usage

1. Type your task in the input field.
2. Click the "Add Task" button or press the `Enter` key to add the task to the list.
3. Click the "Delete" button next to a task to remove it from the list.

## Preview

[JS](https://giphy.com/clips/MostlySane-9UNxDs5vr7SUN939kT)

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>TODO App</h1>
    <input id="taskInput" placeholder="Write your task here..." />
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList">
        <li>Eat<button class="delete">Delete</button></li>
        <li>Sleep<button class="delete">Delete</button></li>
    </ul>
    <script src="todo.js"></script>
</body>
</html>
```

## JAVASCRIPT STRUCTURE

```js
let btn=document.querySelector('#addTaskBtn');
    let ul=document.querySelector('#taskList');
    let inp=document.querySelector('#taskInput');

    function addTask(){
        if (inp.value.trim() === "") return;

        let item=document.createElement('li');
        item.innerText=inp.value;

        let delBtn=document.createElement('button');
        delBtn.innerText="delete";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value="";
    }

    //let delBtns=document.querySelectorAll('.delete');
    //for(delBtn of delBtns){
    //    delBtn.addEventListener('click',function(){
    //        let par=this.parentElement;
    //        console.log(par);
    //
    //    });
    //}

    btn.addEventListener('click', addTask);

    // Add event listener to capture Enter key press on the input field
    inp.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    //event delegation 
    ul.addEventListener('click',function(event){
        if(event.target.nodeName==='BUTTON'){
            let listItem=event.target.parentElement;
            listItem.remove();  
            console.dir("delete");
        }
        else {
            console.dir("do not delete");
            }
        
    });

```
