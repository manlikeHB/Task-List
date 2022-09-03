// creating new list and adding them up
const addTask = document.querySelector('.btn')

addTask.addEventListener("click", createNewList);

const mainInput = document.querySelector('.main-input');

const mainList = document.querySelector('.main-list')




function createNewList() {
    if ( mainInput.value === '') {
        console.log('empty text')
    } else {
        
        const newLi = document.createElement('li');
        
        newLi.className = 'list';
        
        newLi.appendChild(document.createTextNode(mainInput.value));
        
        const newI =  document.createElement('i');

        newLi.addEventListener("click", deleteThis)
        
        newI.className = 'fa-solid fa-xmark';
        
        newLi.appendChild(newI)
        
                mainList.appendChild(newLi);

                mainInput.value = ''
                
            }
            
}


// delete button

const del = document.querySelectorAll('.fa-solid');

for (let button of del) {
    button.addEventListener("click", deleteThis)
}  

function deleteThis(e){
   const button = e.target;
   const itemTodel = button.parentElement;
    itemTodel.remove();

    e.preventDefault()
}

// delete all

const delAll = document.querySelector('.clr');
delAll.addEventListener("click", deleteAll)


function deleteAll(e) {
    let items = document.querySelectorAll('li.list');
    for (let itemTodel of items) {
        itemTodel.remove();
    }

}