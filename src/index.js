document.addEventListener("DOMContentLoaded", () => {
 const form=document.querySelector("#create-task-form")
 const tasks=document.querySelector("#tasks")
 console.log(tasks)
 form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const taskDescription=document.querySelector("#new-task-description")
  if(taskDescription.value==""){
    console.log(taskDescription.value)
    alert("pleas write")
  }
  else{
    const taskList=document.createElement('li');
    const deleteButton=document.createElement(`button`)
    taskList.textContent=taskvalue
    deleteButton.textContent="x"
    taskDescription.appendChild(taskList)
    taskList.appendChild(deleteButton)
    deleteButton.addEventListener('click',()=>{
      taskList.remove()
    })
    }
  }
 )

});
