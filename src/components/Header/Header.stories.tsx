import { Header } from "./Header";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Menu = Template.bind({});
Menu.args = { menu: true };

export const Login = Template.bind({});
Login.args = { menu: false };
