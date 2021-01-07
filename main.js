let nodeCount = 0;

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