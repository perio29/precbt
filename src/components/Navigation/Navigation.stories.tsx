import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navigation } from "./Navigation";

export default {
  title: "Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Question1 = Template.bind({});
Question1.args = {
  questionNumber: 1,
};

export const Question2 = Template.bind({});
Question2.args = {
  questionNumber: 2,
};

export const Question50 = Template.bind({});
Question50.args = {
  questionNumber: 50,
};
