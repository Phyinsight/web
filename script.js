const menuBtn = document.getElementById("menuBtn")
const nav = document.querySelector("nav")

if(menuBtn){
menuBtn.onclick = () => {
nav.style.display = nav.style.display === "flex" ? "none" : "flex"
}
}
