document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', createNewTask);

function createNewTask (e) {
    e.preventDefault()
    let inputItem = document.querySelector('#new-task-description')
    console.log(inputItem.value)
    let li = document.createElement('li')
    li.textContent = inputItem.value
    document.querySelector('#tasks').appendChild(li)
    form.reset()
}

})