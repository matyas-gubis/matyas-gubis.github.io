let addButton = document.getElementById("add");
let inputField = document.getElementById("input");
let tasks = document.getElementById("tasks");

inputField.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        add();
    }
});

addButton.addEventListener('click', add);

function add() {
    if (inputField.value != "") {
        let newItem = document.createElement('div');
        newItem.classList.add("task");

        let p = document.createElement('p');
        p.innerHTML = inputField.value;

        let tools = document.createElement('div');
        tools.classList.add("tools");

        let trashIcon = document.createElement('i');
        trashIcon.classList.add("fa-solid");
        trashIcon.classList.add("fa-trash");
        trashIcon.classList.add("tool");
        trashIcon.addEventListener('click', function(){
            newItem.remove();
        })

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
        })


        tools.prepend(trashIcon);
        tools.append(pencilIcon);

        newItem.append(tools);
        newItem.prepend(p);
        tasks.prepend(newItem);

        inputField.value = "";
    }
}


