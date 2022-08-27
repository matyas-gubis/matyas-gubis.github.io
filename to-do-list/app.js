let addButton = document.getElementById("add");
let inputField = document.getElementById("input");
let tasks = document.getElementById("tasks");
let tasksArray = [];



inputField.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        add();
    }
});

addButton.addEventListener('click', add);
addButton.addEventListener('hover', function(){

})

function add() {    
    if (inputField.value != "") {
        let newItem = document.createElement('div');
        newItem.classList.add("task");

        newItem.addEventListener('click', function(){
            this.classList.toggle("done");
        })

        let p = document.createElement('p');
        p.innerHTML = inputField.value;

        let tools = document.createElement('div');
        tools.classList.add("tools");

        //kuka ikon és működése
        let trashIcon = document.createElement('i');
        trashIcon.classList.add("fa-solid");
        trashIcon.classList.add("fa-trash");
        trashIcon.classList.add("tool");
        trashIcon.addEventListener('click', function(){            
            newItem.remove();        
        })

        //ceruza ikon és működése
        let pencilIcon = document.createElement('i');
        pencilIcon.classList.add("fa-solid");
        pencilIcon.classList.add("fa-pencil");
        pencilIcon.classList.add("tool");
        pencilIcon.addEventListener('click', function(){
            let editText = document.createElement('input');
            editText.type = "text";       
            newItem.after(editText);                 
            editText.focus();
            editText.value = p.innerText;
            newItem.hidden = true;                    
            editText.addEventListener('keyup', function(e){
                if(e.key === "Enter"){
                    p.innerText = editText.value;
                    p.hidden = false;
                    editText.remove();
                    newItem.hidden = false;                                        
                }
            })
            newItem.classList.toggle("done");
        })

        //lefele nyíl és működése
        let downIcon = document.createElement('i');
        downIcon.classList.add("fa-solid");
        downIcon.classList.add("fa-arrow-down");
        downIcon.classList.add("tool");
        downIcon.addEventListener('click', function(){      
            newItem.classList.toggle("done");
            let current = this.parentElement.parentElement;
            let next = current.nextElementSibling;
            if(next != null) {
                next.after(current);    
            }                        
        })
        
        //felfele nyíl és működése
        let upIcon = document.createElement('i');
        upIcon.classList.add("fa-solid");
        upIcon.classList.add("fa-arrow-up");
        upIcon.classList.add("tool");
        upIcon.addEventListener('click', function(){      
            newItem.classList.toggle("done");
            let current = this.parentElement.parentElement;
            let previous = current.previousElementSibling;
            if(previous != null) {
                previous.before(current);    
            }                        
        })

        tools.prepend(trashIcon);
        tools.append(pencilIcon);
        tools.append(downIcon);
        tools.append(upIcon);

        newItem.append(tools);
        newItem.prepend(p);
        tasks.append(newItem);
        tasksArray.push(newItem);

        inputField.value = "";      
        console.log(tasksArray);
        console.log(tasks);    
        console.log(newItem.nextElementSibling);          
    }
    inputField.focus();
}


