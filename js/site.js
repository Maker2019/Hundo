// Get the values from the input
// Controller function
function getValues(){
    // Get the value from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    // Parse into integters.
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        // Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // Call displayNumbers
        displayNumbers(numbers);

    } else{
        alert("You must enter integers");
    }
}


// Generate numbers from startValue to the endValue
// Login function(s)
function generateNumbers(start_value, end_value) {

    let numbers = [];

    // We want to start all numbers from start to end
    for(let index = start_value; index <= end_value; index++){
        // This will execute in a loop until index = value
        numbers.push(index);
    }
    return numbers;
}


// Display the number and mark the even numbers BOLD
// Display or view functions
function displayNumbers(numbers){

    let templateRows  = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];
        
        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd"
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}