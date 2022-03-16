import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ExamBlock } from "../components/Exam-Block/ExamBlock";
import { Header } from "../components/Header/Header";
import { Modal } from "../components/Modal/Modal";

/* ダミーデータ　 */
const dataList = [
  { title: 1, volume: 50, time: 30 },
  { title: 2, volume: 50, time: 30 },
  { title: 3, volume: 50, time: 30 },
  { title: 4, volume: 50, time: 30 },
];

const Home: NextPage = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [testNumber, setTestNumber] = useState(1);

  const toggleModalOn = () => {
    setIsModalOn(!isModalOn);
  };

  const setNumber = (testNum: number) => {
    setTestNumber(testNum);
  };

  return (
    <>
      <Header menu={true} />
      <Container>
        <Title>試験一覧</Title>
        <SubTitle>受験する試験を選択してください</SubTitle>
        {dataList.map((data) => (
          <ExamBox key={data.title} onClick={() => setNumber(data.title)}>
            <ExamBlock
              title={data.title}
              volume={data.volume}
              time={data.time}
              toggleModalOn={toggleModalOn}
            />
          </ExamBox>
        ))}
        <ExamBox></ExamBox>
      </Container>
      {isModalOn && (
        <Modal
          title={`第${testNumber}回`}
          Button1="試験開始"
          Button2="キャンセル"
          toggleModalOff={toggleModalOn}
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
