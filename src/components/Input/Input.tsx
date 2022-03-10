import React from "react";
import styled from "styled-components";

type Props = {
  label?: string;
  placeholder?: string;
  inputType?: "email" | "text" | "password";
};

export const Input: React.VFC<Props> = ({ label, placeholder, inputType }) => {
  return (
    <StyledDiv>
      <Label>{label}</Label>
      <StyledInput type={inputType} placeholder={placeholder} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const Label = styled.p`
  font-size: 20px;
  margin-right: 30px;
`;

const StyledInput = styled.input`
  width: 350px;
  font-size: 20px;
  border-radius: 15px;
  padding: 10px 0px 10px 10px;
  border: solid 2px #082b60;
`;
