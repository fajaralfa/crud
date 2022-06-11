let dForm = document.querySelector('#dForm')
let tmbl = document.querySelector('#tmbl')

let tdata = document.querySelector('#tdata')
let tmbl2 = document.querySelector('#tmbl2')

let updateForm = document.querySelector('#updateForm')
let tmbl3 = document.querySelector('#tmbl3')

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

let createBtn = new Button(dForm, tmbl, 'createBtn')
let readBtn = new Button(tdata, tmbl2, 'readBtn')
let updateBtn = new Button(updateForm, tmbl3, 'updateBtn')

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
