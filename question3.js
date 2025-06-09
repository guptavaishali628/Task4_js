// create a simple form where:
// the user enters a number in an input field.
// when they click a button, print the sum of numbers from 1 to the entered number inside a <p> 

let okk=()=>{
    let num=Number(document.querySelector("#inputnum").value)
    let Sum=0
    let result=document.querySelector("#sum")
    if(!isNaN(num) && num>=1){
        for(let i=0; i<=num; i++){
            Sum+=i
        }
    result.innerHTML="sum of 1 to" + num + "is :" + Sum
    }
    else{
        result.innerHTML="pls enter a valid number grater than zero"
    }
}