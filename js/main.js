let flag = document.querySelector('#flag')
let country = document.querySelector('#country')
let description = document.querySelector('#description')
let form = document.querySelector('#form')
let ul = document.querySelector('.list-item')

function addCountry (hodisa) {
    hodisa.preventDefault()
    if(!(country.value == "") && !(country.value == "") && !(country.value == "")) {
        let li = document.createElement('li')
        let img = document.createElement('img')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')

        img.setAttribute('src', flag.value)
        img.setAttribute('alt', 'flag')

        h2.innerText = country.value

        p.innerText = description.value

        li.classList.add('item')
        img.classList.add('image')
        h2.classList.add('heading')
        p.classList.add('paragraph')

        li.appendChild(img)
        li.appendChild(h2)
        li.appendChild(p)

        ul.appendChild(li)
    }
}
form.addEventListener('submit', addCountry)

function clearboth () {
    flag.value = null
    country.value = null
    description.value = null
}