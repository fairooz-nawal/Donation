function displaysectionbyID(id){
    document.getElementById("cards-section").classList.add("hidden")
    document.getElementById("history-section").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden"); 
   }

function HighLight(id){
    document.getElementById("donation-button").classList.remove("lime");
    document.getElementById("history-button").classList.remove("lime"); 
    document.getElementById(id).classList.add("lime"); 
   }

function inputFieldValue(id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return(inputNumber);
}

function textFieldValue(id){
    const input = document.getElementById(id).innerText;
    const inputNumber = parseFloat(input);
    return(inputNumber);
}