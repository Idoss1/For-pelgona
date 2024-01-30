let display = document.getElementById('display')


function insert(value) {
display.innerHTML += value  

}
function equals() {

display.innerHTML = eval(display.innerHTML)


}




function reset(){

display.innerHTML = ""
   



}
