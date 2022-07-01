import { exibeErro } from "./exibe-erro.js"
import { habilitaBotao } from "./validacao-botao.js"
export function validaInput(input){
    const tipoDeInput = input.dataset.tipo
    validadores[tipoDeInput](input)
}   

const validadores = {
    email: input => verificaEmail(input),
    nome: input => verificaNome(input),
    assunto: input => verificaAssunto(input),
    texto: input => verificaTexto(input)
}

function verificaEmail(input){
    const emailRecebido = input.value
    let mensagem = ''
    let bool = true
    
    if(validaEmail(emailRecebido)){
        mensagem = ''
        exibeErro(input,mensagem, bool)
    }
    if(!validaEmail(emailRecebido)){
        mensagem ='O email deve estar dentro dos padrões. Ex: seunome@dominio.com ok!'
        bool = false;
        exibeErro(input, mensagem, bool)
    }
    if(emailRecebido.length == 0){
        mensagem = 'O campo email está vazio.'
        bool == false
        exibeErro(input,mensagem, bool)

    }
    habilitaBotao(bool)

}

function validaEmail(email){
    const exp = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9-]+)(\.+)([a-zA-Z0-9-]+)(?![!#$%&*])$/
    const resultado = exp.test(email)
    if(resultado == true){
        return true
    }else{
        return false
    }
}

function verificaNome(input){
    const nomeRecebido = input.value
    let mensagem = ''
    let bool = true
    if(nomeRecebido.length <= 50 && nomeRecebido.length > 2){
        mensagem = ''
        exibeErro(input, mensagem, bool)
    }
    if(nomeRecebido.length >50 || nomeRecebido.length < 2){
        mensagem = 'Digite um nome válido com no minimo 2 caracteres e no máximo 50'
        bool = false
        exibeErro(input, mensagem, bool)
    }
    if(nomeRecebido.length == 0){
        mensagem = 'O campo nome está vazio'
        bool = false
        exibeErro(input, mensagem, bool)
    }
    habilitaBotao(bool)
}

function verificaAssunto(input){
    const assuntoRecebido = input.value
    let mensagem = ''
    let bool = true
    if(assuntoRecebido.length <= 50 && assuntoRecebido.length > 2){
        mensagem = ''
        exibeErro(input, mensagem, bool)
    }
  
    if(assuntoRecebido.length >50 || assuntoRecebido.length < 2){
        mensagem = 'Digite um assunto válido com no minimo 2 caracteres e no máximo 50'
        bool = false
        exibeErro(input, mensagem, bool)
    }
    if(assuntoRecebido.length == 0){
        mensagem = 'O campo assunto está vazio'
        bool = false
        exibeErro(input, mensagem, bool)
    }
    habilitaBotao(bool)

}

function verificaTexto(input){
    const textoRecebido = input.value
    let mensagem = ''
    let bool = true
    console.log(textoRecebido.length + " tamanho do textarea ")
    if(textoRecebido.length <= 300 && textoRecebido.length > 2){
        mensagem = ''
        exibeErro(input, mensagem, bool)
    }
  
    if(textoRecebido.length >300 || textoRecebido.length < 2){
        mensagem = 'Sua mensagem deve ter no máximo 300 caracteres'
        bool = false
        exibeErro(input, mensagem, bool)
    }
    if(textoRecebido.length == 0){
        mensagem = 'Você não escreveu nada ainda.'
        bool = false
        exibeErro(input, mensagem, bool)
    }
    habilitaBotao(bool)
}
