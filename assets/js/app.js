
const input = document.querySelector('#input');
const paraContainer = document.querySelector('.paragraphs-container');
const toggle = document.querySelector('.toggle-container');
const image = document.querySelector('#toggle'); 

toggle.addEventListener('click',() => {
     document.body.classList.toggle('active')
     if(document.body.classList.contains('active')){
          image.src = './assets/images/sun.svg'
     }
     else{
          image.src = './assets/images/moon.svg'
     }
})


const generatePara = () => {
     if(isNaN(input.value)){
          alert('please enter number')
     }
     else if(input.value == ''){
          alert('please enter number of paragraphs')
     }
     else if(input.value < 0 || input.value > 50){
          alert('Maximum value is 50')
     }
     else if(input.value == 0){
          alert('please enter a number has greater than 0')
     }
     else{
          showParas()
     }
}

const showParas = () => {
     for(let i = paragraphs.length - 1; i > 0; i-- ){
          const j = Math.floor(Math.random() * (i + 1));
          [paragraphs[i], paragraphs[j]] = [paragraphs[j], paragraphs[i]];
     }
    const para = paragraphs.slice(0,input.value)
    const all = para.map((paragraph) => {
     return `<p>${paragraph}</p>`
    })

    paraContainer.innerHTML = `<p id='loading'>Loading...</p>`
    setTimeout(() => {
          paraContainer.innerHTML = all.join('')
    }, 1500);
}

document.addEventListener('keyup',(e) => {
     if(e.key == 'Enter'){
          document.querySelector("#btn").click()
     }
})