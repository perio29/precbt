import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/StyledButton";

type Props = {
  testTitle: string;
  startend: string;
  chancel: string;
  toggleModal: VoidFunction;
};

export const Modal: React.VFC<Props> = ({
  testTitle,
  startend,
  chancel,
  toggleModal,
}) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Title>{testTitle}</Title>
        <ButtonDiv>
          <StyledButton variants="primary">{startend}</StyledButton>
        </ButtonDiv>
        <ButtonDiv>
          <StyledButton onClick={toggleModal} variants="default">
            {chancel}
          </StyledButton>
        </ButtonDiv>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(196, 196, 196, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 40px 40px 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 0 auto 50px;
`;

const ButtonDiv = styled.div`
  margin: 0 auto 30px;

  :last-child {
    margin-bottom: 0;
  }
`;
