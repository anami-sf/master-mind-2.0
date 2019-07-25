let titleEl = document.getElementById('title')
let pEl = document.querySelector('.cool')
let googleLink = document.querySelector('a')

let commentEls = document.querySelectorAll(".comment")
console.log(commentEls)

// console.log(titleEl)
// console.dir(titleEl)
// console.log(pEl)


pEl.innerHTML = 'Comments for <strong>Today</strong>'

titleEl.style.textAlign = 'center'
titleEl.style.color = 'red'
googleLink.setAttribute('href', "https://www.google.com")

for(let commentEl of commentEls) {
    commentEl.style.fontSize = '30px'
}

//commentEl.setAtribute('fontSize', '30px')