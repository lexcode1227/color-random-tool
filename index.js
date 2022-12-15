const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//#f15025
const btn = document.querySelector("#Btn")
const color = document.querySelector(".color")

btn.addEventListener("click", ()=>{
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})
function getRandomNum(){
    return Math.floor(Math.random() * hex.length)
}

// Sidebar toggle 
const toggleBtn = document.querySelector(".sidebarToggle")
const closeBtn = document.querySelector(".closeBtn")
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click", function (){
    sidebar.classList.toggle("show-sidebar")
})
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar")
  })