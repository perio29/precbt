import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/StyledButton";

type Props = {
  questionNumber: number;
};

export const Navigation: React.VFC<Props> = ({ questionNumber }) => {
  const MIN_QUESTION_NUMBER = 1;
  const MAX_QUESTION_NUMBER = 50;
  return (
    <Container>
      <TopContent>
        <EndButton>
          <StyledButton variants="primary">試験終了</StyledButton>
        </EndButton>
      </TopContent>
      <BottomContent>
        <QuestionNav>
          <PrevButton>
            <StyledButton
              variants="default"
              disabled={questionNumber === MIN_QUESTION_NUMBER}
            >
              前の問題
            </StyledButton>
          </PrevButton>
          <Title>問{questionNumber}</Title>
          <NextButton>
            <StyledButton
              variants="default"
              disabled={questionNumber === MAX_QUESTION_NUMBER}
            >
              次の問題
            </StyledButton>
          </NextButton>
        </QuestionNav>
      </BottomContent>
    </Container>
  );
};

const Container = styled.div`
  width: 65%;
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 20px;
`;

const BottomContent = styled.div`
  display: flex;
  align-items: center;
`;

const EndButton = styled.div`
  margin-right: 30px;
`;

const QuestionNav = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 150px;
`;

const PrevButton = styled.div``;

const NextButton = styled.div``;

const Title = styled.p`
  font-size: 30px;
`;
