const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está assistindo à cerimônia de abertura das Olimpíadas. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Fica empolgado com as performances e a exibição de culturas diversas.",
                afirmacao: "A cerimônia de abertura te inspira com a união e diversidade de culturas."
            },
            {
                texto: "Aprecia os elementos históricos e culturais apresentados.",
                afirmacao: "Você valoriza o aspecto cultural e histórico das Olimpíadas."
            }
        ]
    },
    {
        enunciado: "Seu país está participando de uma competição acirrada de atletismo. Como você acompanha a prova?",
        alternativas: [
            {
                texto: "Assiste com atenção, torcendo fervorosamente pelos atletas do seu país.",
                afirmacao: "Sua paixão pelo esporte faz você torcer intensamente pelos seus atletas."
            },
            {
                texto: "Analisa a técnica e a estratégia dos atletas enquanto assiste.",
                afirmacao: "Você se interessa pelos aspectos técnicos e táticos do atletismo."
            }
        ]
    },
    {
        enunciado: "Um atleta da sua nação acaba de ganhar uma medalha de ouro. Qual é sua reação?",
        alternativas: [
            {
                texto: "Comemora efusivamente e compartilha a notícia com amigos e familiares.",
                afirmacao: "A vitória de um atleta do seu país te enche de orgulho e alegria."
            },
            {
                texto: "Reflete sobre o esforço e a dedicação necessários para alcançar esse resultado.",
                afirmacao: "Você admira a dedicação e o esforço dos atletas para alcançar o sucesso."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de assistir a uma modalidade esportiva pouco conhecida. O que faz?",
        alternativas: [
            {
                texto: "Aproveita a oportunidade para aprender sobre a nova modalidade e entender suas regras.",
                afirmacao: "Você é curioso e gosta de aprender sobre novos esportes."
            },
            {
                texto: "Prefere assistir às modalidades que já conhece e gosta.",
                afirmacao: "Você prefere assistir aos esportes que já está familiarizado."
            }
        ]
    },
    {
        enunciado: "Um amigo te convida para praticar um esporte olímpico. Qual é sua resposta?",
        alternativas: [
            {
                texto: "Aceita o convite e se prepara para a prática esportiva.",
                afirmacao: "Você está sempre disposto a experimentar novos esportes."
            },
            {
                texto: "Agradece o convite, mas prefere assistir ao esporte em vez de praticar.",
                afirmacao: "Você prefere ser espectador do que praticante dos esportes."
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
