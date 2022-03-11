import { Question } from "./Question";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const question = [
  {
    text: "次のウイルスのうち、遺伝子再集合を引き起こすものを選びなさい",
    Label: {
      label1: "レオウイルス",
      label2: "ヘルペスウイルス",
      label3: "ポックスウイルス",
      label4: "アデノウイルス",
      label5: "レオウイルス",
    },
  },
  {
    text: "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこ",
    Label: {
      label1:
        "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍",
      label2:
        "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍",
      label3:
        "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍",
      label4:
        "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍",
      label5:
        "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍",
    },
  },
];

export default {
  title: "Question",
  component: Question,
} as ComponentMeta<typeof Question>;

const Template: ComponentStory<typeof Question> = (args) => (
  <Question {...args} />
);

export const number1 = Template.bind({});
number1.args = {
  text: question[0].text,
  label: question[0].Label,
};

export const number2 = Template.bind({});
number2.args = {
  text: question[1].text,
  label: question[1].Label,
};
