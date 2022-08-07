
var last = 1;

document.querySelector('.prev').addEventListener("click", function(){

    var elementOne = document.getElementById('sb'+last);
    var elementTwo;
    if(last == 1) {
        elementTwo = document.getElementById('sb4');
        last = 4;
    }else{
        elementTwo = document.getElementById('sb'+(last-1));
        last-=1;
    }
    

    if (elementOne.classList.contains("activate")) {
        elementOne.classList.remove("activate");
        elementTwo.classList.add("activate");
    } else {
        elementOne.classList.add("activate");
        elementTwo.classList.remove("activate");
    }
});

document.querySelector('.next').addEventListener("click", function(){
    var elementOne = document.getElementById('sb'+last);
    var elementTwo;
    if(last == 4) {
        elementTwo = document.getElementById('sb1');
        last = 1;
    }else{
        elementTwo = document.getElementById('sb'+(last+1));
        last+=1;
    }
    

    if (elementOne.classList.contains("activate")) {
        elementOne.classList.remove("activate");
        elementTwo.classList.add("activate");
    } else {
        elementOne.classList.add("activate");
        elementTwo.classList.remove("activate");
    }
});