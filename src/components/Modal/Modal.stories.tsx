import { Modal } from "./Modal";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const StartModal = Template.bind({});
StartModal.args = {
  title: "第１回",
  Button1: "受験開始",
  Button2: "キャンセル",
};

export const EndModal = Template.bind({});
EndModal.args = {
  title: "試験を終了しますか？",
  Button1: "終了する",
  Button2: "キャンセル",
};
