let usdInput = document.querySelector('#usd')   
let brlInput = document.querySelector('#brl') 

usdInput.addEventListener('keyup', () => {
    console.log('apertou no campo')
})

brlInput.addEventListener('keyup', () => {
    console.log(brlInput.value)
})




// minha funcao
function avisar () {
    alert('opa, fui disparado!')
}

//variavel para botao
let botao = document.querySelector('#botao')

// mouseover = passo o mouse e ja vem minha funcao.
// click = ao clicar vem a minha funcao.
botao.addEventListener('mouseover', () => {
    avisar()
})