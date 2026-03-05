
const photos = [
"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg"
]

let i=0

function startExperience(){

document.getElementById("intro").style.display="none"
document.getElementById("main").classList.remove("hidden")

document.getElementById("music").play()

startSlider()
typeLetter()

setTimeout(()=>{
document.getElementById("proposal").classList.remove("hidden")
},9000)

startHearts()
}

function startSlider(){

setInterval(()=>{
document.getElementById("slide").src = photos[i]
i=(i+1)%photos.length
},2500)

}

const text="Every moment with you feels magical. You made my world brighter, my heart calmer, and my life happier. Today I just want to ask one thing..."

let j=0

function typeLetter(){

let interval=setInterval(()=>{
document.getElementById("typed").innerHTML += text[j]
j++

if(j==text.length){
clearInterval(interval)
}

},50)

}

function openRing(){

document.querySelector(".ring-box").classList.add("open")
document.getElementById("buttons").classList.remove("hidden")

}

function yes(){

document.getElementById("result").innerHTML="You just made me the happiest person alive ❤️"

confetti({
particleCount:200,
spread:120
})

}

function move(){

let btn=document.querySelector(".no")

btn.style.position="absolute"
btn.style.left=Math.random()*window.innerWidth+"px"
btn.style.top=Math.random()*window.innerHeight+"px"

}

function startHearts(){

setInterval(()=>{
let heart=document.createElement("div")
heart.innerHTML="❤️"

heart.style.position="absolute"
heart.style.left=Math.random()*100+"vw"
heart.style.top="-10px"
heart.style.fontSize="24px"

document.body.appendChild(heart)

let fall=setInterval(()=>{
heart.style.top=(heart.offsetTop+3)+"px"

if(heart.offsetTop>window.innerHeight){
heart.remove()
clearInterval(fall)
}

},20)

},300)

}
