// Q-->2 -->create a button that:
// prompt user to for a sentence
// convert it into the upper case
// display result inside <p>
let sentence=""
let okk=()=>{
    sentence=prompt("enter a sentence")
    let chnagetouppercase=document.getElementById("uppercase")
    chnagetouppercase.innerHTML=sentence.toUpperCase() 
}