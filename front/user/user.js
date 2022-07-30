document.getElementById("user").addEventListener("click", registration);

document.getElementById("pop").style.display = "none";
function registration() {
    document.getElementById("pop").style.display = "flex";
}
document.getElementById("cls").addEventListener('click',function(){
    document.getElementById("pop").style.display = "none";
})