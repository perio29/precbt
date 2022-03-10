import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Form",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const UserName = Template.bind({});
UserName.args = {
  label: "ユーザー名",
  placeholder: "名前を入力してください",
  inputType: "text",
};

export const Email = Template.bind({});
Email.args = {
  label: "メールアドレス",
  placeholder: "メールアドレスを入力してください",
  inputType: "email",
};

export const Password = Template.bind({});
Password.args = {
  label: "パスワード",
  placeholder: "パスワードを入力してください",
  inputType: "password",
};
