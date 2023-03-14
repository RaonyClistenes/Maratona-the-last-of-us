const roteiro = document.querySelector('#list_serie');

const episódios = [
    {
        img: "./assets/episodes/lista/episode1.svg",
        título: '"Quando você está perdido na escuridão"',
        descrição:
            "Em 2003, uma infecção fúngica em massa de Cordyceps mutado desencadeia uma pandemia global. Joel foge com sua filha, Sarah, e irmão, Tommy, de sua casa no Texas; Sarah é morta por um soldado.",
    },

    {
        img: "./assets/episodes/lista/episode2.svg",
        título: '"Infectados"',
        descrição:
            "Dois dias antes do surto mundial, em Jacarta, na Indonésia, o governo mostra um cadáver infectado a um micologista, que lhes diz que não há cura ou vacina.",
    },
    {
        img: "./assets/episodes/lista/episode3.svg",
        título: '"Longo, Longo Tempo"',
        descrição:
            "Joel e Ellie começam a caminhada para se encontrar com Bill e Frank. Ellie vê evidências da execução de inocentes pelo governo durante os primeiros dias da pandemia.",
    },
    {
        img: "./assets/episodes/lista/episode4.svg",
        título: '"Por favor, segure a minha mão"',
        descrição:
            "Viajando pelo Missouri, Joel e Ellie são forçados a fazer um desvio por Kansas City, onde são emboscados.",
    },
];

function lista() {
    
    for (let i = 0; i < episódios.length; i++) {
        const li = document.createElement('li')
        const imagem = document.createElement('img')
        const description = document.createElement('p')
        const title = document.createElement('h4')
        const div = document.createElement('div')
        li.classList.add('list-episodes')
        li.appendChild(imagem)
        li.appendChild(div)
        div.appendChild(title)
        div.appendChild(description)
        div.classList.add('div-description-serie')
        imagem.src = `${episódios[i].img}`
        imagem.style.borderRadius= '12px'
        title.innerHTML = episódios[i].título
        title.classList.add('title__episode')
        description.innerHTML = episódios[i].descrição
        description.classList.add('title__episode')
        roteiro.appendChild(li)

    }
}
lista()