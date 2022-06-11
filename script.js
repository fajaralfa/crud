let createForm = document.querySelector('#createForm')
let readData = document.querySelector('#database')
let updateForm = document.querySelector('#updateForm')
let delForm = document.querySelector('#deleteForm')
let btn = document.querySelectorAll('.btn')
let val = 2

function suitch(nu){
    val = nu
    function nav(){
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
    nav()
}

class Button {
    constructor(element, btn, objname){
        this.element = element
        this.btn = btn
        this.objname = objname
    }
    show(){
        this.element.style.display = 'block'
        this.btn.setAttribute('onclick', this.objname+'.hide()')
    }
    hide(){
        this.element.style.display = 'none'
        this.btn.setAttribute('onclick', this.objname+'.show()')
    }
}

let createBtn, readBtn, updateBtn, delBtn
createBtn = new Button(createForm, btn[0], 'createBtn')
readBtn = new Button(database, btn[1], 'readBtn')
updateBtn = new Button(updateForm, btn[2], 'updateBtn')
delBtn = new Button(delForm, btn[3], 'delBtn')

// function showForm(){
//     dForm.style.display = 'block'
//     tmbl.setAttribute('onclick', 'hideForm()')
// }
// function hideForm(){
//     dForm.style.display = 'none'
//     tmbl.setAttribute('onclick', 'showForm()')
// }

// function showData(){
//     tdata.style.display = 'block'
//     tmbl2.setAttribute('onclick', 'hideData()')
// }
// function hideData(){
//     tdata.style.display = 'none'
//     tmbl2.setAttribute('onclick', 'showData()')
// }
