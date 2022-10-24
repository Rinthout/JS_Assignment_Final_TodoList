const textBox = document.querySelector("#input-task");
const todoList = document.querySelector("#todo-list");

const checkChecked = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    if (target.checked === true) {
        parent.classList.add("crossOut");
    } else {
        parent.classList.remove("crossOut");
    }
};

const remove = async (event) => {
    const target = event.target;
    const li = target.parentNode.parentNode;
    const id = li.id;
    await deleteData(id);
    todoList.innerHTML = "";
    textBox.value = "";
    createList();
};


const createList = async () => {
    const todos = await getData();
    todos.map((todo) => {
        const newLi = document.createElement("li");
        const newDiv = document.createElement("div");
        const checkBox = document.createElement("input");
        const node = document.createTextNode(todo.description);
        const id = todo._id;
        const deleteIcon = document.createElement("img");
        newLi.id = id;

        newLi.classList.add("todo");
        newDiv.classList.add("todoDiv");
        checkBox.classList.add("checkbox");

        deleteIcon.classList.add("imgBin");
        deleteIcon.src = "images/trashbin.png";
        deleteIcon.addEventListener("click", remove);

        checkBox.name = "checkbox";
        checkBox.type = "checkbox";
        checkBox.addEventListener("click", checkChecked);

        newDiv.appendChild(checkBox);
        newDiv.appendChild(node);
        newDiv.appendChild(deleteIcon);
        newLi.appendChild(newDiv);
        todoList.appendChild(newLi);
    });
};

createList();

const createData = async (event) => {
    const value = event.target.value;
    const newItem = {
        description: value,
        done: false,
    };
    await postData(newItem);
    todoList.innerHTML = "";
    textBox.value = "";
    createList();
};

textBox.addEventListener("change", createData);



