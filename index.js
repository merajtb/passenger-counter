let count = 0;
let saveEl = document.getElementById("save-el")
function increment(){
    count++;
    document.getElementById("count-el").innerHTML = count ;
//console.log("clicking recorded event")

};

function decrementation (){
    
    count--;
    document.getElementById("count-el").innerHTML = count ;
    //console.log("clicking recorded event")
   
};

function decrement(){

if (count > 0)
    decrementation();
else
alert("Error : Negative numbers are not allowed!");


}

function resetdata1(){
    count = 0
    document.getElementById("count-el").innerHTML=0
    
} 



function save(){

saveEl.textContent +=  count + " - "
count = 0
document.getElementById("count-el").innerHTML = 0
}






function resetdata(){
    
    if (confirm("Warning : Are you sure to reset data?") == true){
     count = 0
     document.getElementById("count-el").innerHTML = count
    window.alert("Persons data in reset")
    saveEl.textContent = " "
    


    }
else {
    window.alert("Keep going on!")
}



}