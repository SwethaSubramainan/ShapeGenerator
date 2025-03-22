let button = document.getElementById("button");
// const col = document.getElementById("color");
var numberInShape = 1;
var oldvalue = 0;

// onclick pandrapo enna nadakanum
button.onclick = () => {
    let n=document.getElementById("number").value;
    const cir = document.getElementById("circle");
    const squ = document.getElementById("square");
    const rec = document.getElementById("rectangle");
    const oval = document.getElementById("oval");
    const box = document.getElementById("box");
    const color = document.getElementById("color");

    n = Number(n) + Number(oldvalue);
    for( let j = numberInShape; j<=n; j++)
    {
        let shape = document.createElement("div"); 
        shape.innerHTML += numberInShape;  // Shape la number kudukanum
        if(cir.checked)
            shape.classList.add("circle");
        else if(squ.checked)
            shape.classList.add("square");
        else if(rec.checked)
            shape.classList.add("rectangle");
        else if(oval.checked)
            shape.classList.add("oval");
        else
            document.write("Invalid Input");

        if (color.value) {
            shape.style.backgroundColor = color.value;
        }

            numberInShape++;
            box.appendChild(shape);
            oldvalue = document.getElementById("box").lastElementChild.innerHTML;
    }
};