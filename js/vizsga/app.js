//defining the variables
let button = document.getElementById("calculate");

let savingTimeInput = document.getElementById("savingTime")
let savingTime = savingTimeInput.value;
let savingTimeValues = [26, 52, 156, 260];

let savingAmountInput = document.getElementById("savingAmount");
let savingAmount = Number(savingAmountInput.value);

let wholeNumberAlert = document.getElementById("wholeNumberAlert");

let goals = document.getElementsByName("goal");

let missingData = true;
let falseData = false;
let allSavings = 0;
let text = "";
let result = document.getElementById("result");

//these objects get called when the calculations and the displaying happen
let bike = {name: "kerékpár", price: 100000};
let phone = {name: "telefon", price: 80000};
let gameConsole = {name: "játékkoznol", price: 150000};

let selectables = [bike, phone, gameConsole];

//the main function when the 'számol' button is clicked
function BtnClicked(){
    savingAmount = Number(savingAmountInput.value);
    savingTime = savingTimeInput.value;

    //first I check if all the data are given and correct
    CheckSavingAmountFilled();
    CheckSavingTimeFilled();
    CheckWholeNumber();

    //if the data are correctly given, I calculate with them, and if not, I pop an alert
    if (missingData){
        alert("Hiányzó adatok!");
    }else if(falseData){
        alert("Hibás adatok!");
    }else{        
        Display();
    }
}

//checking if the 'savingAmount' input field has any entered value
function CheckSavingAmountFilled(){
    if(savingAmount == ""){
        savingAmountInput.classList.toggle("border-danger", true);
        missingData = true;
    }else{
        savingAmountInput.classList.toggle("border-danger", false);
        missingData = false
    }
}

//checking if the 'savingTime' input field has a selected value
function CheckSavingTimeFilled(){
    if (savingTime == -1){
        missingData = true;
        savingTimeInput.classList.toggle("border-danger", true);
        savingTimeInput.classList.toggle("text-danger", true);    
    } else {
        missingData = false;
        savingTimeInput.classList.toggle("border-danger", false);
        savingTimeInput.classList.toggle("text-danger", false);  
    }
}

//checking if the entered value is indeed a whole number
//this gets called whenever a button is released in the 'savingAmount' input field and when the "számol" button is clicked
function CheckWholeNumber(){    
    let wholeNumber = /^[0-9\-]+$/;    
    savingAmount = savingAmountInput.value;
    if(!(wholeNumber.test(savingAmount)) || savingAmount <= 0){
        wholeNumberAlert.hidden = false;
        savingAmountInput.classList.toggle("border-danger", true);
        falseData = true;
    }else{
        wholeNumberAlert.hidden = true;        
        savingAmountInput.classList.toggle("border-danger", false);
        falseData = false;
    }

    if(!(wholeNumber.test(savingAmount))){        
        document.getElementById("wholeNumber").hidden = false;                     
    }else{        
        document.getElementById("wholeNumber").hidden = true;        
    }    

    if(savingAmount <= 0){
        document.getElementById("greaterThanZero").hidden = false;
    }else{
        document.getElementById("greaterThanZero").hidden = true;
    }

    
}

//a quick function to get the selected goal, which is given by the radio buttons, and the values are collected to the "selectables" array
function SelectedGoal(){
    for (let i = 0; i < goals.length; i++) {        
        if(goals.item(i).checked){
            return selectables[i];
        }
    }
}

//this function calculates if the saved amount is enought to buy the goal item, and returns a true or false value
//it gets called in the Display() function
function Calculate(){
    allSavings = Number(savingAmount * savingTimeValues[savingTime]);
    if(SelectedGoal().price-allSavings > 0){
        return true;        
    }else{
        return false;        
    }
}

//after all the branching, this function writes a message to the user based on the Calculate() function
function Display(){
    if(Calculate()){
        text = `<p>Önnek ${allSavings} megtakarítása van.</p><p>Ez az összeg sajnos nem elég, hogy egy ${SelectedGoal().name}t vásároljon. Még ${SelectedGoal().price-allSavings} Ft-ra van szüksége, amit heti ${savingAmount} Ft összeggel ${Math.ceil((SelectedGoal().price-allSavings)/savingAmount)} hét alatt tehet félre`;
    }else{
        text = `<p>Önnek ${allSavings} Ft megtakarítása van.</p><p>Ez az összeg elég arra, hogy vásároljon egy ${SelectedGoal().name}t.`;
    }
    result.innerHTML = text;
}

