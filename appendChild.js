let d = document.getElementById("destination");
let myButton = document.getElementById("button");
myButton.style.backgroundColor = "Red";
let userInput = document.getElementById("input");

    myButton.onclick = function(){
        let node = document.createElement('li');
        console.log(node);
       // node.appendChild
       // (document.createTextNode("new"));

        node.appendChild(document.createTextNode(userInput.value));

        let list = document.getElementById
        ("items");

        list.appendChild(node);
    }; 
