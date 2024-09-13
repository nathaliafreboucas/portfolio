import { dataCardSkills } from "../data.js"
const renderCardSkills = (titulo, img) =>{
    const skillsPlace = document.querySelector('[data-conteudo-skills]')
    const templateCardSkills = `
    <li class="html box_itens">
        <p>${titulo}</p>
        <img src="${img}" />                    
    </li>
    `
    skillsPlace.innerHTML+=templateCardSkills
}

dataCardSkills.map((item)=>{
    renderCardSkills(item.titulo, item.img)
})