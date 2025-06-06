//Q--> create two button
// button1=promt the user their fav subject
// button2=display "your fav sub is : [subject]" in <h4> tag using inner html
let favsub=""
let asksub=()=>{
     favsub=prompt("enter your fav color:")
}

let showsub=()=>{
    let display=document.querySelector("#show")
    display.innerHTML="your fav color is :" + favsub
}