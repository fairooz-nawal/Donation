// Noakhali Section
document.getElementById("noakhaliInputbutton").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById('my_modal_5').close();
    const input = inputFieldValue("noakhaliInputField");
    const donation = textFieldValue("totalDontationNoakhali");
    const TotalAmount = textFieldValue("TotalAmount");

    if(isNaN(input) || input<=0 || input>= 5500){
       alert("Please Try again");
       return;
    }
    else
    {  
       document.getElementById("totalDontationNoakhali").innerText = (input + donation) + " " +"BDT" ;
       document.getElementById("TotalAmount").innerText = (TotalAmount - input)+ " " + "BDT";
       
       //Transaction section
       const transaction = document.createElement("div");
       transaction.classList.add("card","lg:card-side","bg-base-100","shadow-xl","p-8","border-2","border-gray-200", "mb-5");
       const text = document.createElement("p");
       text.classList.add("text-xl");
       text.innerText =`Amount Added: ${input} to Donation in Noakhali Donation `;
       transaction.appendChild(text);
       document.getElementById("history-section").appendChild(transaction);
       console.log("")
    }

});

// Feni Section
document.getElementById("feniInputbutton").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById('Feni_donate').close();
    const input = inputFieldValue("feniInputField");
    const donation = textFieldValue("totalDontationFeni");
    const TotalAmount = textFieldValue("TotalAmount");
    if(isNaN(input) || input<=0 || input>=5500){
        alert("Please Try again");
        return;
    }
    else
    {
       document.getElementById("totalDontationFeni").innerText = (input + donation) + " " + "BDT";
       document.getElementById("TotalAmount").innerText = (TotalAmount - input) + " " + "BDT";

        //Transaction section
        const transaction = document.createElement("div");
        transaction.classList.add("card","lg:card-side","bg-base-100","shadow-xl","p-8","border-2","border-gray-200", "mb-5");
        const text = document.createElement("p");
        text.classList.add("text-xl");
        text.innerText =`Amount Added: ${input} to Donation in Feni Donation `;
        transaction.appendChild(text);
        document.getElementById("history-section").appendChild(transaction);
        console.log("")
    }
});

// Quota Section
document.getElementById("QuotaInputButton").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById('quota_donate').close();
    const input = inputFieldValue("QuotaInputField");
    const donation = textFieldValue("totalDontationQouta");
    const TotalAmount = textFieldValue("TotalAmount");
    if(isNaN(input) || input<=0 || input>= 5500){
       alert("Please Try again");
       return;
    }
    else
    {
       document.getElementById("totalDontationQouta").innerText = (input + donation) + " " + "BDT";
       document.getElementById("TotalAmount").innerText = (TotalAmount - input) + " " + "BDT";

        //Transaction section
        const transaction = document.createElement("div");
        transaction.classList.add("card","lg:card-side","bg-base-100","shadow-xl","p-8","border-2","border-gray-200", "mb-5");
        const text = document.createElement("p");
        text.classList.add("text-xl");
        text.innerText =`Amount Added: ${input} to Donation in Quota Donation `;
        transaction.appendChild(text);
        document.getElementById("history-section").appendChild(transaction);
        console.log("")
    }
});