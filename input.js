const colorInput = document.querySelector(".container input")
const color = document.querySelector(".color")
const btn = document.getElementById("btn")


btn.addEventListener("click",function(){
    let colorText = colorInput.value;
    
    if (!colorText) {
        alert("Digite uma cor antes de continuar!");
        return; 
    }
    
    color.textContent = colorText;
    document.body.style.backgroundColor = colorText;
});