import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/StyledButton";

type Props = {
  QuestionNumber: number;
};

export const Navigation: React.VFC<Props> = ({ QuestionNumber }) => {
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
              disabled={QuestionNumber === 1 ? true : false}
            >
              前の問題
            </StyledButton>
          </PrevButton>
          <Title>問{QuestionNumber}</Title>
          <NextButton>
            <StyledButton
              variants="default"
              disabled={QuestionNumber === 50 ? true : false}
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
