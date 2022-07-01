export function exibeErro(input,mensagem, bool){
    
    if(bool==true){
        input.parentElement.classList.remove('exibe-erro')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    }else{
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mensagem
        input.parentElement.classList.add('exibe-erro')
    }  
    console.log(bool + ' esse eh o bool') 
}
