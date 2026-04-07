let dolar = 5.1

let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')

usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl')
})

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd')
    
})

usdInput.addEventListener('blur', () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = '0,00' // variavel para o campo input usd sempre comecar com este valor '0.00'

convert('usd-to-brl')

//FUNCOES
function formatCurrency(value) {
    let fixedValue  = fixValue(value) //varivel do valor formatado vai ser meu numero com o ajuste
    let options = { // OBJETO COM DUAS PROPRIEDADES
        useGrouping: false, // tira o o ponto/virgula do numero, exp: do numero '1.000';
        minimumFractionDigits: 2  // sempre ter dois numero depois da virgula;
    }
    let formatter = new Intl.NumberFormat('pt-BR', options)
    return formatter.format(fixedValue) //fixedValue = nosso numero ajustado do input
}
// AJUSTE DE VALOR 
// 1 - transforma virgula para ponto
// 2 - passa de caracter para numero
// 3 - caso escrever no input letra, sempre corrige pra 0.
function fixValue(value) {
    let fixedValue = value.replace(',','.')
    let floatValue = parseFloat(fixedValue)
    if (isNaN(floatValue)) {
        floatValue = 0
    }
    return floatValue
}
// AJUSTE DE VALOR 
function convert(type) {
    if(type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)
        // coverter valor
        // mostrar no campo de real
    }
    if(type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value) // ajuste de valor

        let result = fixedValue / dolar // fazendo minha conversao de valor

        result = result.toFixed(2) // colocando sempre dois numero decimais apos meu valor

        usdInput.value = formatCurrency(result) // fazendo mostrar e formatar no meu campo usd

    }
}
