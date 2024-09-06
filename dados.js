let dados = [
        {
            nome: "Charmander",
            descricao: "A chama na ponta da cauda deste Pokémon é um indicador de sua vitalidade. Se a chama estiver fraca é sinadal de que ele esta doente.",
            link:"https://www.pokemon.com/br/pokedex/charmander",
        },
        {
            nome: "Charmeleon",
            descricao: "A chama na ponta da cauda de Charmeleon queima mais intensamente quando este Pokémon está com raiva.",
            link:"https://www.pokemon.com/br/pokedex/charmeleon",
        },
        {
            nome: "Charizard",
            descricao: "Ao voar, a chama na ponta da cauda deste Pokémon queima com ainda mais intensidade. Seus ataques de fogo são extremamente poderosos.",
            link: "https://www.pokemon.com/br/pokedex/charizard",
        },
        {
            nome: "Cyndaquill",
            descricao: "O fogo que queima em suas costas aumenta de intensidade quando ele está emocionado.",
            link:"https://www.pokemon.com/br/pokedex/cyndaquill",
        },
        {
            nome: "Quilava",
            descricao: "As chamas nas costas de Quilava queimam ferozmente. Diz-se que a temperatura ao redor dele pode chegar a 800 graus.",
            link:"https://www.pokemon.com/br/pokedex/quilava",
        },
        {
            nome: "Typhlosion",
            descricao: "As chamas que queimam nas costas de Typhlosion são tão quentes que podem derreter rochas. Seus rugidos são ensurdecedores.",
            link:"https://www.pokemon.com/br/pokedex/typhlosion",
        },
        {
            nome: "Torchic",
            descricao: "A chama em sua cabeça brilha intensamente quando está animado.",
            link:"https://www.pokemon.com/br/pokedex/torchic",
        },
        {
            nome: "Combusken",
            descricao: "Combusken luta usando suas pernas e a chama em sua cabeça. Seus chutes são tão poderosos que podem incendiar a grama seca.",
            link:"https://www.pokemon.com/br/pokedex/combusken",
        },
        {
            nome: "Blaziken",
            descricao:"Blaziken é um Pokémon de combate extremamente habilidoso. A chama em sua cabeça queima com uma intensidade incrível durante as batalhas.",
            link:"https://www.pokemon.com/br/pokedex/blaziken",
        },
        {
            nome:"Chimchar",
            descricao:"A chama na ponta de sua cauda é um sinal de sua vitalidade. Quanto mais brilhante, mais saudável ele está.",
            link:"https://www.pokemon.com/br/pokedex/chimchar",
        },
        {
            nome:"Monferno",
            descricao:"Monferno é um lutador ágil e rápido. A chama em sua cauda se torna maior e mais intensa durante as batalhas.",
            link:"https://www.pokemon.com/br/pokedex/monferno",
        },
        {
            nome:"Infernape",
            descricao:"Infernape é um Pokémon extremamente poderoso. A chama em sua cauda queima com uma intensidade incrível, capaz de incendiar florestas.",
            link:"https://www.pokemon.com/br/pokedex/infernape",
        },
        {
            nome:"Tepig",
            descricao:"A espiral de pelos em suas costas se inflama quando está com raiva.",
            link:"https://www.pokemon.com/br/pokedex/tepig",
        },
        {
            nome:"Pignite",
            descricao:"Pignite é um lutador feroz. As chamas em suas costas queimam com mais intensidade quando está em batalha.",
            link:"https://www.pokemon.com/br/pokedex/pignite",
        },
        {
            nome:"Emboar",
            descricao:"Emboar é um Pokémon de combate poderoso. As chamas em suas costas são tão quentes que podem derreter rochas.",
            link:"https://www.pokemon.com/br/pokedex/emboar",
        },
        {
            nome:"Fennekin",
            descricao:"A ponta de sua cauda brilha intensamente, indicando a força de seu poder psíquico e de fogo.",
            link:"https://www.pokemon.com/br/pokedex/fennekin",
        },
        {
            nome:"Braixen",
            descricao:"Braixen manipula as chamas com a vara mágica que segura em suas mãos.",
            link:"https://www.pokemon.com/br/pokedex/braixen",
        },
        {
            nome:"Delphox",
            descricao:"Delphox usa a chama mágica de sua vara para realizar ataques poderosos e hipnotizantes.",
            link:"https://www.pokemon.com/br/pokedex/delphox",
        },
        {
            nome:"Litten",
            descricao:"Litten é um Pokémon selvagem e independente que ama a liberdade. Seu pelo é tão oleoso que se inflama ao menor atrito.",
            link:"https://www.pokemon.com/br/pokedex/litten",
        },
        {
            nome:"Torracat",
            descricao:"Torracat é um Pokémon orgulhoso que adora chamar a atenção. Sua pelagem inflamada emite uma luz intensa.",
            link:"https://www.pokemon.com/br/pokedex/torracat",
        },
        {
            nome:"Incineroar",
            descricao:"Incineroar é um lutador poderoso e carismático que adora entreter o público. Seus ataques de fogo são devastadores.",
            link:"https://www.pokemon.com/br/pokedex/incineroar",
        },
        {
            nome:"Scorbunny",
            descricao:"Scorbunny é um Pokémon cheio de energia que ama correr. A chama em suas orelhas queima mais intensamente quando está animado.",
            link:"https://www.pokemon.com/br/pokedex/scorbunny",
        },
        {
            nome:"Raboot",
            descricao:"Raboot é um Pokémon rápido e ágil que luta com suas pernas e a chama em suas orelhas. Seus chutes são extremamente poderosos.",
            link:"https://www.pokemon.com/br/pokedex/raboot",
        },
        {
            nome:"Cinderace",
            descricao:"Cinderace é um astro do futebol que utiliza a bola de fogo para realizar jogadas incríveis. Seus chutes são tão fortes que podem causar explosões.",
            link:"https://www.pokemon.com/br/pokedex/cinderace",
        },
        {
            nome:"Fuecoco",
            descricao:"Fuecoco é um Pokémon do tipo Fogo que adora comer bagas picantes. A chama em sua barriga cresce quando ele está feliz.",
            link:"https://www.pokemon.com/br/pokedex/fuecoco",
        },
        {
            nome:"Crocalor",
            descricao:"Crocalor é a evolução de Fuecoco. Ele é um Pokémon forte e resistente, com uma casca dura que protege seu corpo. As chamas em sua barriga se tornam mais intensas durante as batalhas.",
            link:"https://www.pokemon.com/br/pokedex/crocalor",
        },
        {
            nome:"Skeledirge",
            descricao:"Skeledirge é a evolução final de Fuecoco. Ele é um Pokémon poderoso e elegante, capaz de controlar as chamas com maestria. Suas performances de dança são hipnotizantes",
            link:"https://www.pokemon.com/br/pokedex/skeledirge",
        },
    ]