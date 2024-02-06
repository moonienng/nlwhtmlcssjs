const perguntas = [
    {
        pergunta: "Qual tag HTML é usada para criar um link?",
        respostas: [
            "<a>",
            "<link>",
            "<href>"
        ],
        correta: 0
    },
    {
        pergunta: "Qual propriedade CSS é usada para definir a cor do texto?",
        respostas: [
            "text-color",
            "font-color",
            "color"
        ],
        correta: 2
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "variable",
            "var",
            "let"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o símbolo para selecionar um elemento por ID em CSS?",
        respostas: [
            "#",
            ".",
            "&"
        ],
        correta: 0
    },
    {
        pergunta: "O que significa HTML?",
        respostas: [
            "HighTech Multi-Language",
            "HyperText Markup Language",
            "Hyperlink Markup Language"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função principal do CSS?",
        respostas: [
            "Manipular dados do servidor",
            "Estilizar elementos HTML",
            "Controlar o comportamento dos elementos HTML"
        ],
        correta: 1
    },
    {
        pergunta: "Como você define um estilo CSS diretamente em um elemento HTML?",
        respostas: [
            "Usando o atributo 'class'",
            "Usando o atributo 'id'",
            "Usando o atributo 'style'"
        ],
        correta: 2
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um formato de arquivo comum em JavaScript",
            "Uma linguagem de programação em JavaScript",
            "Uma representação em árvore dos elementos HTML"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "'==' verifica igualdade de valor, '===' verifica igualdade de valor e tipo",
            "'==' verifica igualdade de valor e tipo, '===' verifica igualdade de valor",
            "Ambos verificam igualdade de valor e tipo"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um elemento HTML",
            "Um bloco de código reutilizável que executa uma tarefa específica",
            "Um estilo de formatação em JavaScript"
        ],
        correta: 1
    }
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length

const mostrartTotal = document.querySelector('#acertos span')
mostrartTotal.textContent = corretas.size + ' de ' + totalDePerguntas
for (const item of perguntas)
{
    
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas)
{
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //boleano
        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }
        mostrartTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
}
quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem)
}
