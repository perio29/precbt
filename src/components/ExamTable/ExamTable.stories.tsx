import { ExamTable } from "./ExamTable";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const questionNumbers = [...Array(50).keys()].map((x) => x + 1);

export default {
  title: "Table",
  component: ExamTable,
} as ComponentMeta<typeof ExamTable>;

const Template: ComponentStory<typeof ExamTable> = (args) => (
  <ExamTable {...args} />
);

export const table = Template.bind({});
table.args = {
  questionNumbers: questionNumbers,
};

