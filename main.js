let nodeCount = 0;
let selectedColor = "";
let mouseDown = false;

function addColumn(){ // Create a node in the column.
    let col = document.getElementsByClassName("column");
    for(let i = 0; i < col.length; i++)
        col[i].appendChild(createNode());
    nodeCount++;
}

function addRow(){  // Creates a column, poupulates it with the number of nodes we are currently up to and then appends it to a newly created row.
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    document.getElementById("container").appendChild(row);

    let col = document.createElement("div");
    col.setAttribute("class", "column");

    for(let i = 0; i < nodeCount; i++)
        col.appendChild(createNode());

    row.appendChild(col);
}

function createNode(){ // Creates a square
    let node = document.createElement("div")
    node.setAttribute("id", "node");
    node.setAttribute("class", "node");
    node.style.backgroundColor = "white"
    node.setAttribute("onmousedown", "onDown()");
    node.setAttribute("onmouseup", "onUp()");
    node.setAttribute("onmouseover", "onHover()");
    return node;
}

function removeRow(){ // Simply deletes the first row child in the list of rows.
    let rows = document.getElementsByClassName("row");
    rows[0].remove();
}

function removeColumn(){ // Each column is a div with node children representing each rows columns. It will delete the columns first child for each column in a row.
    let columns = document.getElementsByClassName("column");
    for(let i = 0; i < columns.length; i++)
        columns[i].removeChild(columns[i].childNodes[0]);
    nodeCount--;
}

function changeColor(id){
    selectedColor = (id === "red" ? "red" : (id === "green" ? "green" : "blue"));
    document.getElementsByClassName("dropbtn")[0].style.color = selectedColor;
}

function fillEvery(){
    let list = document.getElementsByClassName("node");
    for(let i = 0; i < list.length; i++)
        list[i].style.backgroundColor = selectedColor;
}

function fillUncolored(){
    let list = document.getElementsByClassName("node");
    for(let i = 0; i < list.length; i++){
        if(list[i].style.backgroundColor == 'white')
            list[i].style.backgroundColor = selectedColor;
    }
}

function clearAll(){
    let list = document.getElementsByClassName("node");
    for(let i = 0; i < list.length; i++)
        list[i].style.backgroundColor = "white";
}

function onDown(){
    mouseDown = true;
    event.target.style.backgroundColor = selectedColor;
}

function onUp(){
    mouseDown = false;
}

function onHover(){
    if(mouseDown)
        event.target.style.backgroundColor = selectedColor;
}
