console.log("My TODOs")
todos = [];
todos = JSON.parse(localStorage?.getItem("todos")) || [];
showTodos()
function addTodo(){
    let todo = document.getElementById("todo").value
    let desc = document.getElementById("desc").value
    let tod = {
        todo,
        desc
    }
    todos.push(tod)
  localStorage.setItem("todos",JSON.stringify(todos))
    
    // friends.map((friend)=>console.log(friend))
    
    showTodos()

}



function showTodos(){
    // let ele = document.getElementById("showfrd")
    const node = document.createElement("div");
 

let data = ``;
    // friends.map((element)=> myfrds = myfrds+`<li>${element}</li>`)
    todos.forEach(element => {
        console.log(element)
        data = data+  `
<div class="card m-2 justify-content-center w-75"  style="width: 30%;">
        <div class="card-body">
          <h5 class="card-title">${element.todo}</h5>
          <p> Desciption: ${element.desc} </p>
        </div>
      </div>
`;
// const textnode = document.createTextNode(data);
// node.appendChild(data);

});
node.innerHTML = data;
document.getElementById("showtodo").appendChild(node);


  
    


}