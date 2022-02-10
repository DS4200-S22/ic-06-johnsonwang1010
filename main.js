/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked");
    
    let buttonDiv = document.getElementById("button-div"); 
    // then we buttonDiv's content
    buttonDiv.innerHTML = newText; 
}

function button2Clicked() {
    let newText = "Button was clicked!"; 
    // we need to select the button-div (using its id) 
    let buttonDiv = document.getElementById("button-div"); 
    // then we buttonDiv's content
    buttonDiv.innerHTML = newText; 
}







let random_num = Math.random()
console.log(random_num)

