var user=document.querySelector("#icon")
var profile=document.querySelector("#u1")
var close=document.querySelector("#close")


user.addEventListener('click',function(){
    profile.style.display = "initial"
    profile.style.right = '0.5%'   
})
close.addEventListener('click',function(){
    profile.style.display = "none"
    profile.style.right = '-22%'

})