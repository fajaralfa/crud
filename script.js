let createForm = document.querySelector('#createForm')
let readData = document.querySelector('#database')
let updateForm = document.querySelector('#updateForm')
let delForm = document.querySelector('#deleteForm')
let btn = document.querySelectorAll('.btn')

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
readBtn = new Button(database, btn[1], 'readBtn')
updateBtn = new Button(updateForm, btn[2], 'updateBtn')
delBtn = new Button(delForm, btn[3], 'delBtn')
createBtn = new Button(createForm, btn[0], 'createBtn')

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
