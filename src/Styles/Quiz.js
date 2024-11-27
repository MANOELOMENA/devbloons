import styled from 'styled-components';

export const ContainerQuiz = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2c2c2c;
`;

export const CaixaPergunta = styled.div`
  background-color: #4d4d4d;
  color: white;
  width: 600px; /* Largura ajustada */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const TextoPergunta = styled.h2`
  margin-bottom: 25px;
`;

export const OpcoesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Opcao = styled.button`
  width: 48%;
  background-color: ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? '#4CAF50' /* Verde para correto */
        : '#F44336' /* Vermelho para incorreto */
      : '#6e6e6e'};
  color: white;
  border: none;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isSelected ? null : '#575757')};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const BotaoProxima = styled.button`
  background-color: #008cba;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005f73;
  }
`;

export const ExplicacaoResposta = styled.div`
  margin-top: 20px;
  background-color: #333;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  text-align: left;
`;
