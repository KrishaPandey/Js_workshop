// Use a for loop to call a function multiple times that calculates the square of a number and prints the result.(ask input in prompt and show result in alert)

function square(num){
    return num**2;
}

n=parseInt(prompt("How many number you want square of  "))
if( !isNaN(n)){
for (let i=0;i<=n;i++){
    num=parseInt(prompt("Enter a number"));
    result=square(num);
    alert(`The sqaure of ${num} is ${result}`)
}}

