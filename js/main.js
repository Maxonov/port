

document.querySelector('.butmeme').addEventListener("click",function(){
    let elem = document.getElementById("meme");
    let max = 5,min = 1;
    let num = Math.floor(Math.random() * (max - min) + min);
    elem.src = "images/memes/"+num+".jpg";
});

document.querySelector('.butmeme').addEventListener("click",function(){
    let elem = document.getElementById("meme1");
    let max = 5,min = 1;
    let num = Math.floor(Math.random() * (max - min) + min);
    elem.src = "../images/memes/"+num+".jpg";
});

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