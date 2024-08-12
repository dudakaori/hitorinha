const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Alex, um aventureiro que encontra um mapa antigo com uma miteriosa mensagem: “Encontre o coração da floresta para revelar o segredo.” Você se prepara para a jornada e chega à entrada de uma floresta encantada.",
        alternativas: [
            {
                texto: "Entrar diretamente na floresta.",
                afirmacao: "a caixa contém"
            },
            {
                texto: "examinar os arredores da entrada.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Você decide entrar diretamente na floresta e logo se depara com duas trilhas: uma que segue para esquerda e outra para a direita.",
        alternativas: [
            {
                texto: "seguir a trilha da esquerda, que parece menos visível.",
                afirmacao: " um artefato mágico que"
            },
            {
                texto: "seguir a trilha da direita, que é mais clara e iluminada.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Ao seguir a trilha da esquerda, você encontra um lago sereno e um velho barco à deriva.",
        alternativas: [
            {
                texto: "navegar no barco para explorar o lago.",
                afirmacao: " revela o egredo da floresta: um portal para um reino"
            },
            {
                texto: "continuar pela margem do lago para procurar outra pista.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "O poema sugere que a chave para encontrar o coração da floresta é a “luz da manhã”. Com essa dica, você decide entrar na floresta.",
        alternativas: [
            {
                texto: "seguir a trilha que parece ser iluminada pela luz do sol.",
                afirmacao: "encantado. Você atravessa o portal e descobre um mundo"
            },
            {
                texto: "procurar um lugar para passar a noite e entrar na floresta pela manhã.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "enquanto navega no barco, você encontra uma pequena ilha com uma antiga caixa de tesouro.",
        alternativas: [
            {
                texto: "abrir a caixa e descobrir o que há dentro.",
                afirmacao: " cheio e maravilhas e mistérios."
            },
            {
                texto: "continuar explorando a ilha ante de abrir a caixa",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();