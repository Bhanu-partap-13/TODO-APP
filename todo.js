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

