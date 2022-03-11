import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ExamBlock } from "./ExamBlock";

export default {
  title: "Exam-Block",
  component: ExamBlock,
} as ComponentMeta<typeof ExamBlock>;

const Template: ComponentStory<typeof ExamBlock> = (args) => (
  <ExamBlock {...args} />
);

export const NO1 = Template.bind({});
NO1.args = {
  title: 1,
  volume: 50,
  time: 30,
};

export const NO2 = Template.bind({});
NO2.args = {
  title: 2,
  volume: 50,
  time: 30,
};

export const NO3 = Template.bind({});
NO3.args = {
  title: 3,
  volume: 50,
  time: 30,
};
