const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está assistindo à cerimônia de abertura das Olimpíadas. Qual é sua primeira impressão sobre o evento?",
        alternativas: [
            {
                texto: "É uma celebração incrível e inspiradora!",
                afirmacao: "Sentiu-se inspirado pela grandiosidade e beleza da cerimônia."
            },
            {
                texto: "Parece um desperdício de dinheiro.",
                afirmacao: "Ficou preocupado com os custos envolvidos na realização do evento."
            }
        ]
    },
    {
        enunciado: "Durante as competições, você vê atletas de diferentes países competindo. Como você se sente sobre a diversidade nas Olimpíadas?",
        alternativas: [
            {
                texto: "A diversidade é o que torna as Olimpíadas especiais.",
                afirmacao: "Aprecia a união de diversas culturas em um único evento."
            },
            {
                texto: "É difícil acompanhar tantas culturas diferentes.",
                afirmacao: "Sente-se um pouco perdido com a variedade de culturas presentes."
            }
        ]
    },
    {
        enunciado: "Um atleta do seu país ganha uma medalha de ouro. Qual é sua reação?",
        alternativas: [
            {
                texto: "Sente um grande orgulho nacional.",
                afirmacao: "Ficou emocionado e orgulhoso pelo sucesso do atleta de seu país."
            },
            {
                texto: "A vitória individual é mais importante que a nacionalidade.",
                afirmacao: "Acredita que o mérito é do atleta, independentemente da nacionalidade."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de assistir a uma competição ao vivo. Qual esporte você escolhe?",
        alternativas: [
            {
                texto: "Atletismo, pela emoção das corridas.",
                afirmacao: "Escolheu assistir ao atletismo para sentir a adrenalina das corridas."
            },
            {
                texto: "Ginástica artística, pela beleza das performances.",
                afirmacao: "Prefere a ginástica artística por causa da graça e habilidade envolvidas."
            }
        ]
    },
    {
        enunciado: "As Olimpíadas deste ano estão chegando ao fim. Qual é sua reflexão final sobre o evento?",
        alternativas: [
            {
                texto: "Foi um evento que uniu o mundo.",
                afirmacao: "Acredita que as Olimpíadas são uma força unificadora global."
            },
            {
                texto: "Os recursos poderiam ser usados de maneira mais útil.",
                afirmacao: "Pensa que o investimento poderia ser direcionado para outras áreas."
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
    caixaPerguntas.textContent = "Reflexão final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
