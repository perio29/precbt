import React from "react";
import styled from "styled-components";

type Props = {
  testNumber: number;
  volume: number;
  time: number;
  toggleModal: VoidFunction;
};

export const ExamBlock: React.VFC<Props> = ({
  testNumber,
  volume,
  time,
  toggleModal,
}) => {
  return (
    <Container onClick={toggleModal}>
      <Title>第{testNumber}回</Title>
      <StyledDiv>
        <QuestionVolume>問題数: {volume}問</QuestionVolume>
        <TimeLimit>制限時間: {time}分</TimeLimit>
      </StyledDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  border: solid 1px #333;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

const Title = styled.p``;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const QuestionVolume = styled.p`
  margin-right: 50px;
`;

const TimeLimit = styled.p``;
