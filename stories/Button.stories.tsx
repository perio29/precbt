import { StyledButton } from "../src/components/Button/StyledButton";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
} as ComponentMeta<typeof StyledButton>;

export const Primary = () => {
  return (
    <StyledButton disabled={false} primary={true} secondary={false}>
      次の問題
    </StyledButton>
  );
};
export const Secondary = () => {
  return (
    <StyledButton disabled={false} primary={false} secondary={true}>
      試験終了
    </StyledButton>
  );
};
export const Disabled = () => {
  return (
    <StyledButton disabled={true} primary={false} secondary={false}>
      前の問題
    </StyledButton>
  );
};
