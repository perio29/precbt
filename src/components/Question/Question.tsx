import React, { useState } from "react";
import styled from "styled-components";

type Label = {
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
};

type Props = {
  text: string;
  label: Label;
};

export const Question: React.VFC<Props> = ({ text, label }) => {
  return (
    <>
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
      <RadioContainer>
        <RadioBox>
          <input id="no1" type="radio" name="question" />
          1.<label htmlFor="no1">{label.label1}</label>
        </RadioBox>
        <RadioBox>
          <input id="no2" type="radio" name="question" />
          2.<label htmlFor="no2">{label.label2}</label>
        </RadioBox>
        <RadioBox>
          <input id="no3" type="radio" name="question" />
          3.<label htmlFor="no3">{label.label3}</label>
        </RadioBox>
        <RadioBox>
          <input id="no4" type="radio" name="question" />
          4.<label htmlFor="no4">{label.label4}</label>
        </RadioBox>
        <RadioBox>
          <input id="no5" type="radio" name="question" />
          5.<label htmlFor="no5">{label.label5}</label>
        </RadioBox>
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
  }

  label {
    display: block;
  }
`;
