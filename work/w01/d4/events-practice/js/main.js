const btn =document.querySelector('button')
const sct = document.querySelector('section')

sct.addEventListener("click", handleClick)

function handleClick(e) {
    e.target.style.backgroundColor = "yellow"
}

btn.addEventListener("click", function(evt) {
    const li = document.createElement('li')
    const input = document.querySelector('input')
    const list = document.querySelector('ul')
    li.textContent = input.value
    list.appendChild(li)
    input.value = " "

    console.log(li);  
})