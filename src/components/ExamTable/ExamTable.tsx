import React from "react";
import styled from "styled-components";

type Props = {
  questionNumber: number[];
};

export const ExamTable: React.VFC<Props> = ({ questionNumber }) => {
  return (
    <Container>
      <TableContent>
        <Table>
          {questionNumber.map((i) => (
            <tr key={i}>
              <td>問{i}</td>
              <td></td>
            </tr>
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
