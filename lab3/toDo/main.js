window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#add-task");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // console.log("Submit form");
        const task = input.value;

        if(!task) {
            alert("Please, add a task, then try again");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_check_el = document.createElement("div");
        task_check_el.classList.add("checkbox-bg");

        const check_el = document.createElement("input");
        check_el.type = "checkbox";
        check_el.classList.add("check");

        task_check_el.appendChild(check_el);
        task_el.appendChild(task_check_el);

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', ()=> {
            if(task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "edit";
            }
        })

        task_delete_el.addEventListener('click', () =>{
            list_el.removeChild(task_el);
        })
    })
})