import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ExamBlock } from "../components/Exam-Block/ExamBlock";
import { Header } from "../components/Header/Header";
import { Modal } from "../components/Modal/Modal";

/* ダミーデータ　 */
const testList = [
  { testNumber: 1, volume: 50, time: 30 },
  { testNumber: 2, volume: 50, time: 30 },
  { testNumber: 3, volume: 50, time: 30 },
  { testNumber: 4, volume: 50, time: 30 },
];

const Home: NextPage = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [testNum, setTestNum] = useState(1);

  const toggleModal = () => {
    setIsModalOn(!isModalOn);
  };

  const setNumber = (testNum: number) => {
    setTestNum(testNum);
  };

  return (
    <>
      <Header menu={true} />
      <Container>
        <Title>試験一覧</Title>
        <SubTitle>受験する試験を選択してください</SubTitle>
        {testList.map((data) => (
          <ExamBox
            key={data.testNumber}
            onClick={() => setNumber(data.testNumber)}
          >
            <ExamBlock
              testNumber={data.testNumber}
              volume={data.volume}
              time={data.time}
              toggleModal={toggleModal}
            />
          </ExamBox>
        ))}
        <ExamBox></ExamBox>
      </Container>
      {isModalOn && (
        <Modal
          testTitle={`第${testNum}回`}
          startend="試験開始"
          chancel="キャンセル"
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Home;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 30px 0;
`;

const SubTitle = styled.p`
  font-size: 20px;
  width: 320px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ExamBox = styled.div`
  margin-top: 30px;
`;
