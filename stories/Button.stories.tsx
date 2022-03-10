import { StyledButton } from "../src/components/Button/StyledButton";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
} as ComponentMeta<typeof StyledButton>;

export const Default = () => {
  return <StyledButton variants="default">次の問題</StyledButton>;
};
export const Primary = () => {
  return <StyledButton variants="primary">試験終了</StyledButton>;
};
export const Disabled = () => {
  return <StyledButton disabled={true}>前の問題</StyledButton>;
};
