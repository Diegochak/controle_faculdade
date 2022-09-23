var cards = [
    {
        img:"./src/assets/img/001.jpg",
        title:"Data science",
        descripiton:"Aprenda ciência de dados em 8 semanas com mentorias individuais de grandes especialistas. Receba assessoria de carreira individual e dê seu próximo passo profissional.",
    },
    {
        img:"./src/assets/img/6600.jpg",
        title:"Direito",
        descripiton:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae reiciendis ut velit voluptatem iure facere qui  rerum eius at?",
    },
    {
        img:"./src/assets/img/001 (3).jpg",
        title:"Astronomia",
        descripiton:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae reiciendis ut velit voluptatem iure facere qui  rerum eius at?",
    },
    {
        img:"./src/assets/img/008.jpg",
        title:"EAD",
        descripiton:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae reiciendis ut velit voluptatem iure facere qui  rerum eius at?",
    },
    {
        img:"./src/assets/img/001 (4).jpg",
        title:"Unidades",
        descripiton:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae reiciendis ut velit voluptatem iure facere qui  rerum eius at?",
    },
    {
        img:"./src/assets/img/001 (5).jpg",
        title:"Palestras",
        descripiton:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae reiciendis ut velit voluptatem iure facere qui  rerum eius at?",
    },
    {
        img:"./src/assets/img/009.jpg",
        title:"Reitoria",
        descripiton:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae reiciendis ut velit voluptatem iure facere qui  rerum eius at?",
    },
    {
        img:"./src/assets/img/007.jpg",
        title:"Videos",
        descripiton:"Fazemos Roteiros, Edição de Vídeos, Pós-Produção e Muito Mais. Entre em Contato Já! Soluções em Comunicação Audiovisual, Criação e Produção de Vídeos e Filmes.",
    },
];

var principal = document.querySelector('#principal')
console.log (principal)

for (const card of cards) {
    var div = document.createElement("div");
    div.className = "categoryCard";
    div.innerHTML =
    `<img
        src="${card.img}"
        alt="cardimage"
        class="mainCardImg"/>
    <p class="mainCategoryCardTitle">${card.title}</p>
    <p class="mainCategoryCardDescription">${card.descripiton}</p>`
    
    principal.appendChild(div)
    
}





