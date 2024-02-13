let randBtn = document.getElementById("randBtn");
let addNameBtn = document.getElementById("addNameBtn");
let groupSize = document.getElementById("groupSizer");
let groups = document.getElementById('groups')
let groupsTxt = document.getElementById('groupsTxt');
let amountOfGroups = document.getElementById('amountOfGroups')
let h5
let removeBtn
let colDiv1
let colDiv2
let listRow
let hr
let h5count = document.querySelectorAll('h5')
let nameList = []



randBtn.addEventListener('click', () =>{

        while(nameList.length){
        const random = Math.floor(Math.random()*nameList.length)
        const el = nameList.splice(random, 1)[0]
        console.log(el)
        }
    
    groupOne()
    
    groups.group1 = nameList.splice(0, groupSize.value)
    groups.group2 = nameList.splice(groupSize.value)
    console.log(groups.group1)
    console.log(groups.group2)
    groupsTxt.textContent = `Group 1: ${groups.group1.join(', ')}`
    
})




let names = localStorage.getItem('Names')
names = names ? JSON.parse(names) : []


//function for creating name list
const AddName = (name) => {
    nameList.push(name)
    console.log(nameList)
    totalNames.textContent = `Total Names: ${nameList.length}`
    h5 = document.createElement("h5");
    removeBtn = document.createElement("button");
    colDiv1 = document.createElement("div");
    colDiv2 = document.createElement("div");
    listRow = document.createElement("div");
    hr = document.createElement('hr')
    listRow.classList = "row border-2 border-bottom border-solid border-black";
    
    colDiv1.classList = "col";
    colDiv2.classList = "col";
    h5.textContent = name;
    removeBtn.classList = "btn btn-danger";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', ()=>{
        removeName(name)
    });
    
    colDiv1.append(h5);
    colDiv2.append(removeBtn)
    listRow.append(colDiv1, colDiv2);
    listDiv.append(listRow);
 
};

addNameBtn.addEventListener("click", () => {
  names = localStorage.getItem('Name')
  names = names ? JSON.parse(names) : []
  AddName(nameInput.value)
  
  localStorage.setItem('Name', JSON.stringify(nameList))
});

const removeName = (CurrentName) =>{
    names = localStorage.getItem('Name')
    names = names ? JSON.parse(names) : []
    names = names.filter(name => name !== CurrentName)
    listRow.remove(CurrentName)
    localStorage.setItem('Name', JSON.stringify(names))
    nameList = names
    totalNames.textContent = names ? `Total Names: ${names.length}` : 'Total Names: 0'
}

const LSDetection = () =>{
    
    names = localStorage.getItem('Name')
    names = names ? JSON.parse(names) : []
    if(names.length !==0){
        nameList = []
        
        names.forEach(name =>{AddName(name)})  
    }
    console.log(nameList)
}

LSDetection()