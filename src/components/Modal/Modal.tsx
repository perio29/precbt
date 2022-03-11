import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  Button1: JSX.Element;
  Button2: JSX.Element;
};

export const Modal: React.VFC<Props> = (props) => {
  const { title, Button1, Button2 } = props;
  return (
    <ModalWrapper>
      <ModalContent>
        <Title>{title}</Title>
        <ButtonDiv>{Button1}</ButtonDiv>
        <ButtonDiv>{Button2}</ButtonDiv>
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
