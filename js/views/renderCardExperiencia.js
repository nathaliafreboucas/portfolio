import {dataCardExperiencias} from '../data.js'
export const renderCardExperiencia = (organizaCard, classItemExp, banner, titulo, urlRep, urlPag, logosTecDev, descricao) =>{
    const experienciaPlace = document.querySelector('[data-experiencia]')
    const logosHTML = logosTecDev.map(logo => `<img src="${logo}" alt="Logo de tecnologia"/>`).join('');
    const templateCardExperiencia = `
    <div class="section-item-experiencia ${classItemExp}">
        <div class="div_imagem">
            <img src="${banner}" alt="">
        </div>
        <div class="div_botoes" id="${organizaCard}">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <div class="logos-projetos">
               ${logosHTML}               
            </div>                        
            <div>
                <a href="${urlRep}" target="_blank"><button class="experiencia_botoes">Repositório</button></a>
                <a href="${urlPag}" target="_blank"><button class="experiencia_botoes">Página</button></a>
            </div>
        </div>
    </div>
    `
    experienciaPlace.innerHTML += templateCardExperiencia
}

dataCardExperiencias.map((item,index)=>{
    let organizaCard = ""
    if((index+1)%2==0){
        organizaCard = "excecao-experiencia"
    }

    renderCardExperiencia(organizaCard, item.class, item.banner, item.titulo, item.urlRep, item.urlPag, item.logosTecDev, item.descricao)
})