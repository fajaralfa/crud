let createForm = document.querySelector('#createForm')
let readData = document.querySelector('#database')
let updateForm = document.querySelector('#updateForm')
let delForm = document.querySelector('#deleteForm')
let btn = document.querySelectorAll('.btn')
let val = 2

function suitch(nu){
    val = nu
    switch(val){
        case 1:
            btn[0].style.fontWeight = 'bolder'
            btn[1].style.fontWeight = btn[2].style.fontWeight = btn[3].style.fontWeight = 'normal'
            createForm.style.display = 'block'
            readData.style.display = updateForm.style.display = delForm.style.display = 'none'
            break
        case 2:
            btn[1].style.fontWeight = 'bolder'
            btn[0].style.fontWeight = btn[2].style.fontWeight = btn[3].style.fontWeight = 'normal'
            readData.style.display = 'block'
            createForm.style.display = updateForm.style.display = delForm.style.display = 'none'
            break
        case 3:
            btn[2].style.fontWeight = 'bolder'
            btn[0].style.fontWeight = btn[1].style.fontWeight = btn[3].style.fontWeight = 'normal'
            updateForm.style.display = 'block'
            readData.style.display = createForm.style.display = delForm.style.display = 'none'
            break
        case 4:
            btn[3].style.fontWeight = 'bolder'
            btn[0].style.fontWeight = btn[1].style.fontWeight = btn[2].style.fontWeight = 'normal'
            delForm.style.display = 'block'
            readData.style.display = updateForm.style.display = createForm.style.display = 'none'
            break
        default:
            btn[0].style.fontWeight = btn[1].style.fontWeight = btn[2].style.fontWeight = btn[3].style.fontWeight = 'normal'
            createForm.style.display = readData.style.display = updateForm.style.display = delForm.style.display = 'none'
            break
    }
}

//AJAX CAN BERES
//function getData(){
//    let xhr = new XMLHttpRequest()
//    xhr.onreadystatechange = function(){
//        if(this.readyState === 4 && this.status === 200){
//            docum
//        }
//    }
//}
