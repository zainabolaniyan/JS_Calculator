
const operator = prompt("Please enter the math operation you would like to complete ( Either +, -, * or / ) : ");

const valueOne = parseFloat(prompt("Please enter your first value. : "));
    
const valueTwo = parseFloat(prompt("Please enter your second value : "));

let result;

        
if (operator == "+") 
{
result = valueOne + valueTwo;  
}
else if (operator == "-") 
{
result = valueOne - valueTwo;  
}
else if (operator == "*") 
{
result = valueOne * valueTwo; 
}
else
{
result = valueOne / valueTwo; 
}

window.alert(" Result is : " + result);
