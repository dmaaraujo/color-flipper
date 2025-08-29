const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
// pegar um número aleatótio entre 0 - 3 colors[3]
    const randomNumber = getRandomNumeber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumeber(){
    return Math.floor(Math.random() * colors.length);
}