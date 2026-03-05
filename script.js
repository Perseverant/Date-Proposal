function startSlider(){
 let intervalId = setInterval(()=>{
 document.getElementById("slide").src = photos[i]
 if(i === photos.length - 1){
 clearInterval(intervalId)
 }else{
 i=(i+1)
 }
 },2500)
}