let data = [];
printData();

function viewData() {
    let taskAdd = document.getElementById("taskAdd").value;

    let obj = {
        userId: Math.floor(Math.random() * 100),
        taskAdd: taskAdd,
    }
    if (localStorage.getItem("toDoTask") === null || localStorage.getItem("toDoTask") === undefined) {
        data.push(obj);
        localStorage.setItem("toDoTask", JSON.stringify(data));
    }
    else {
        let val = JSON.parse(localStorage.getItem("toDoTask"));
        val.push(obj);
        localStorage.setItem("toDoTask", JSON.stringify(val));
    }


    alert("record added successfully");

    document.getElementById("taskAdd").value = "";

    printData();
}

function printData() {
    let val = JSON.parse(localStorage.getItem("toDoTask"));

    document.getElementById("edit").style.display = "none";

    let tbl = "";


    // <li class="task-list-item">${val[i].taskAdd}</li> 
    for (let i in val) {
        tbl +=
            `
            <li class="task-list-item">
            <label class="task-list-item-label" >
            <span id="task-data">${val[i].taskAdd}</span></label>
            <span title="Edit Task" onclick="editData(${val[i].userId})" class="edit-btn"></span>
            <span title="Delete Task" class="delete-btn" onclick="deleteData(${val[i].userId})"></span>
            </li>
        `
    }
    document.getElementById("record").innerHTML = tbl;
}

function deleteData(id){
    // console.log(id)

    let val = JSON.parse(localStorage.getItem("toDoTask"));

    // console.log(val);

    for(let i in val){
        if(val[i].userId == id){
            // console.log(val[i]);

            val.splice(i, 1);
        }
        localStorage.setItem("toDoTask", JSON.stringify(val));
    }

    alert("deleted successfully");
    printData();
}

function editData(id){
    // alert("edit data successfully");

    document.getElementById("save").style.display = "none";

    document.getElementById("edit").style.display = "block";

    let val = JSON.parse(localStorage.getItem("toDoTask"));

    // console.log(val);

    for (let i in val){
        if(val[i].userId == id){
            document.getElementById("taskAdd").value = val[i].taskAdd;
            document.getElementById("userid").value = val[i].userId;
        }
    }

}

function editedData(){
    let userid = document.getElementById("userid").value;
    let taskAdd = document.getElementById("taskAdd").value;

    let val = JSON.parse(localStorage.getItem("toDoTask"));

    for(let i in val){
        if(val[i].userId == userid){
            val[i].taskAdd = taskAdd;
        }
        localStorage.setItem("toDoTask" , JSON.stringify(val));
    }
    alert("Record edited successfully");
    document.getElementById("userid").value = "";
    document.getElementById("taskAdd").value = "";

    document.getElementById("save").style.display = "block";
    document.getElementById("edit").style.display = "none";

    printData();
}

