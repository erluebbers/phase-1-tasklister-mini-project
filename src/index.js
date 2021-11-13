document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', createNewTask);

function handleDelete (e) {
  e.target.parentNode.remove()
}

function createNewTask (e) {
    e.preventDefault()
    let inputItem = document.querySelector('#new-task-description')
    let li = document.createElement('li')
    let btn = document.createElement('button')
    let dropDown = document.createElement('form')
    dropDown.innerHTML = `<select> <option value='not important'>not important</option> <option value = 'important'>important</option> <option value='very important'>very important</option> </select>`
    btn.addEventListener('click', handleDelete)
    li.textContent = `${inputItem.value} `
    btn.textContent = 'X'
    li.appendChild(btn)
    li.appendChild(dropDown)
    document.querySelector('#tasks').appendChild(li)
    form.reset()
}
})