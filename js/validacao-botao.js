export function habilitaBotao(bool){
    const botao = document.querySelector('#botao-form')
    if(bool == false){
        botao.disabled = true
    }
    if(bool==true){
        botao.disabled = false

    }
    
}
