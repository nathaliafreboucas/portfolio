import { dataCardHobbies } from "../data.js"
export const renderCardHobbies = (titulo, img) => {

    const conteudoHobbies = document.querySelector('[data-conteudo-hobbies]')

    const templateCardHobbies = `
    <li class="tocar box_itens">
        <p>${titulo}</p>
        <img src="${img}" alt="">
    </li>
    `
    conteudoHobbies.innerHTML+=templateCardHobbies
}

dataCardHobbies.map((item)=>{
    renderCardHobbies(item.titulo, item.img)
})

