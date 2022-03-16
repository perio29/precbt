import React from "react";
import styled from "styled-components";

type Props = {
  questionNumbers: number[];
};

export const ExamTable: React.VFC<Props> = ({ questionNumbers }) => {
  return (
    <Container>
      <TableContent>
        <Table>
          {questionNumbers.map((questionNumber) => (
            <tbody key={questionNumber}>
              <tr>
                <td>問{questionNumber}</td>
                <td></td>
                {/* radioボタンが押されたら、済を表示 flagで表示切り替えができる？ */}
              </tr>
            </tbody>
          ))}
        </Table>
      </TableContent>
    </Container>
  );
};

const Container = styled.div`
  width: 160px;
  height: 500px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const TableContent = styled.div`
  width: 160px;
  height: 480px;
  border: 1px;
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  overflow: hidden;
  overflow-y: scroll;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 120px;

  td {
    border: solid 1px #b9b9b9;
    width: 60px;
    height: 30px;
    text-align: center;

    &:first-child {
      cursor: pointer;
    }
  }
`;
