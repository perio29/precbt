import styled from "styled-components";

type Variants = "primary" | "default";

type ButtonProps = {
  disabled?: boolean;
  variants?: Variants;
};

export const StyledButton = styled.button<ButtonProps>`
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 15px;
  background: ${(props) => {
    if (props.disabled) {
      return "rgba(0,0,0,0.15)";
    }
    if (props.variants === "default") {
      return "#fff";
    }
    if (props.variants === "primary") {
      return "#082b60";
    }
  }};

  color: ${(props) => {
    if (props.disabled) {
      return "#082b60";
    }
    if (props.variants === "default") {
      return "#082b60";
    }
    if (props.variants === "primary") {
      return "#fff";
    }
  }};

  border: solid 3px rgba(8, 43, 96, 0.6);
  box-shadow: ${(props) => {
    if (props.disabled) {
      return "none";
    }
    if (props.variants === "default") {
      return "3px 3px 0 rgba(8, 43, 96, 1)";
    }
    if (props.variants === "primary") {
      return "none";
    }
  }};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: none;

    background: ${(props) =>
      props.variants === "primary" && "rgba(8, 43, 96, 0.21)"};
    color: ${(props: ButtonProps) =>
      props.variants === "primary" && "rgba(8, 43, 96, 1)"};
  }
`;
