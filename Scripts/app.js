let randBtn = document.getElementById("randBtn");
let addNameBtn = document.getElementById("addNameBtn");
let groupSize = document.getElementById("groupSizer");
let groups = document.getElementById('groups')


let nameList = [];

randBtn.addEventListener("click", () => {});

const AddName = (name) => {
    totalNames.textContent = `Total Names: ${nameList.length}`
    let h5 = document.createElement("h5");
    let removeBtn = document.createElement("button");
    let colDiv1 = document.createElement("div");
    let colDiv2 = document.createElement("div");
    let listRow = document.createElement("div");
    let hr = document.createElement('hr')
    listRow.classList = "row";

    colDiv1.classList = "col";
    colDiv2.classList = "col";
    h5.textContent = name;
    removeBtn.classList = "btn btn-danger";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', ()=>{
        removeName()
    })
    colDiv1.append(h5);
    colDiv2.append(removeBtn)
    listRow.append(colDiv1, colDiv2);
    listDiv.append(listRow, hr);
 
};

addNameBtn.addEventListener("click", () => {
  nameList.push(nameInput.value);
  AddName(nameInput.value)
  
});
