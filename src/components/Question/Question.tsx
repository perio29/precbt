import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  label: string[];
};

export const Question: React.VFC<Props> = ({ text, label }) => {
  return (
    <>
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
      <RadioContainer>
        {label.map((l, i) => (
          <RadioBox key={i}>
            <input id={`no${i + 1}`} type="radio" name="question" />
            {i + 1}.<label htmlFor={`no${i}`}>{l}</label>
          </RadioBox>
        ))}
      </RadioContainer>
    </>
  );
};

const TextContainer = styled.div`
  width: 900px;
  overflow-wrap: break-word;
  margin-bottom: 50px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const RadioContainer = styled.div`
  width: 900px;
  overflow-wrap: break-word;
`;

const RadioBox = styled.div`
  margin-bottom: 20px;
  display: flex;

  :last-child {
    margin-bottom: 0px;
  }

  input {
    display: block;
    margin-right: 20px;
    margin-top: 5px;
    cursor: pointer;
  }

  label {
    display: block;
  }
`;
