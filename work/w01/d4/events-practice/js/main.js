const btn =document.querySelector('button')

btn.addEventListener("click", function(evt) {
    const li = document.createElement('li')
    const input = document.querySelector('input')
    const list = document.querySelector('ul')
    li.textContent = input.value
    list.appendChild(li)

    console.log(li);  
})