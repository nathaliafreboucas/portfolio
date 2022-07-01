import { validaInput } from "./validacao.js"
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('blur', (evento)=>{
        evento.preventDefault()
        validaInput(evento.target)

    })

})
const textarea = document.querySelector('textarea')
textarea.addEventListener('blur',(evento)=>{
    /*a funcao valida pega o alvo */
    validaInput(evento.target)
})
