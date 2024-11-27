import React, { useState } from 'react';
import {
  ContainerQuiz,
  CaixaPergunta,
  TextoPergunta,
  Opcao,
  OpcoesContainer,
  BotaoProxima,
  ExplicacaoResposta,
} from '../Styles/Quiz.js';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false); // Para controlar se a questão foi respondida

  const questions = [
    {
      text: 'Qual é o objetivo principal da Consolidação das Leis do Trabalho (CLT)?',
      options: [
        { text: 'Garantir direitos trabalhistas e regulamentar as relações de trabalho no Brasil.', isCorrect: true },
        { text: 'Proteger apenas os empregadores em relação a contratos de trabalho.', isCorrect: false },
        { text: 'Criar regras para profissões autônomas.', isCorrect: false },
        { text: 'Controlar a arrecadação de impostos trabalhistas.', isCorrect: false },
      ],
      explanation: 'A CLT visa garantir os direitos dos trabalhadores e regulamentar as relações de trabalho no Brasil, sendo um marco fundamental da legislação trabalhista.',
    },
    {
      text: 'Quem é responsável por fiscalizar as relações de trabalho no Brasil?',
      options: [
        { text: 'Ministério do Trabalho e Emprego', isCorrect: true },
        { text: 'Secretaria da Receita Federal', isCorrect: false },
        { text: 'Ministério da Economia', isCorrect: false },
        { text: 'Governo Estadual', isCorrect: false },
      ],
      explanation: 'O Ministério do Trabalho e Emprego é responsável por fiscalizar as relações de trabalho no Brasil, garantindo o cumprimento das leis trabalhistas.',
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (index) => {
    if (answered) return; // Não permite escolher mais de uma opção
    setSelectedOption(index);
    setAnswered(true); // Marca como respondido
  };

  const handleNextQuestion = () => {
    setSelectedOption(null); // Limpa a seleção
    setAnswered(false); // Reseta o estado de resposta
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <ContainerQuiz>
      <CaixaPergunta>
        <TextoPergunta>{currentQuestion.text}</TextoPergunta>
        <OpcoesContainer>
          {currentQuestion.options.map((option, index) => (
            <Opcao
              key={index}
              onClick={() => handleAnswer(index)}
              isCorrect={option.isCorrect}
              isSelected={selectedOption === index}
              disabled={answered} // Desabilita as opções após uma seleção
            >
              {option.text}
            </Opcao>
          ))}
        </OpcoesContainer>

        {answered && (
          <>
            <ExplicacaoResposta>
              <p>{currentQuestion.explanation}</p>
            </ExplicacaoResposta>
            <BotaoProxima onClick={handleNextQuestion}>Próxima</BotaoProxima>
          </>
        )}
      </CaixaPergunta>
    </ContainerQuiz>
  );
};

export default Quiz;
