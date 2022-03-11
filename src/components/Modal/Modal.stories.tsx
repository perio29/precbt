import { Modal } from "./Modal";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StyledButton } from "../Button/StyledButton";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const StartModal = Template.bind({});
StartModal.args = {
  title: "第１回",
  Button1: <StyledButton variants="primary">受験する</StyledButton>,
  Button2: <StyledButton variants="default">キャンセル</StyledButton>,
};

export const EndModal = Template.bind({});
EndModal.args = {
  title: "試験を終了しますか？",
  Button1: <StyledButton variants="primary">終了する</StyledButton>,
  Button2: <StyledButton variants="default">キャンセル</StyledButton>,
};
