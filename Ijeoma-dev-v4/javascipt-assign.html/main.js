if(document.readyState == "loading"){
document.addEventListener('click', ready)

}else{
ready()
}
function ready(){
    const slide = document.querySelectorAll(".content2");
    const nextBtn = document.getElementById("angle1");
    nextBtn.addEventListener("click", angle1);
    const prevBtn = document.getElementById("angle2");
    prevBtn.addEventListener("click", angle2);

}

