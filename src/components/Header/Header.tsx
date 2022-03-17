import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button/StyledButton";

type Props = {
  menu: boolean;
};

export const Header: React.VFC<Props> = ({ menu }) => {
  return (
    <StyledHeader>
      <Logo>preCBT</Logo>
      {menu && (
        <Menu>
          <ul>
            <li>
              <StyledButton variants="default">試験一覧</StyledButton>
            </li>
            <li>
              <StyledButton variants="default">試験結果一覧</StyledButton>
            </li>
          </ul>
        </Menu>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #082b60;
  margin: 0;
`;

const Menu = styled.div`
  margin-left: 45px;

  ul {
    display: flex;
    align-items: center;
    margin: 0;

    li {
      list-style: none;
      &:first-child {
        margin-right: 30px;
      }
    }
  }
`;
