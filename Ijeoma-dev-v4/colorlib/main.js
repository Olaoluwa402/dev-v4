var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
sliderTrigger.addEventListener( "click" , function(el){
if(slider.classList.contains("active")){
  slider.classList.remove("active");
 }else{
  slider.classList.add("active");
 }
});