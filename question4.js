// create a counter using innerhtml
// add two buttons : "increament by 3 " and "decreament by 3"
// by using inline onclick method on button:

let increament=()=>{
   let myTag=document.querySelector("#num")
   let counter=myTag.innerHTML
   myTag.innerHTML=parseInt(counter)+3
}

let decreament=()=>{
    let myTag=document.querySelector("#num")
    let counter=myTag.innerHTML
    myTag.innerHTML=parseInt(counter)-3
    if(counter==0){
        myTag.innerHTML="sorry we can not decrease value less than zero"
    }
}