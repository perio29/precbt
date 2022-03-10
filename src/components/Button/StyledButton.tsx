import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
};

export const StyledButton = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 15px;
  background: ${(props: ButtonProps) => {
    if (props.disabled) {
      return "rgba(0,0,0,0.15)";
    }
    if (props.primary) {
      return "#fff";
    }
    if (props.secondary) {
      return "#082b60";
    }
  }};

  color: ${(props: ButtonProps) => {
    if (props.disabled) {
      return "#082b60";
    }
    if (props.primary) {
      return "#082b60";
    }
    if (props.secondary) {
      return "#fff";
    }
  }};

  border: solid 3px rgba(8, 43, 96, 0.6);
  box-shadow: ${(props: ButtonProps) => {
    if (props.disabled) {
      return "none";
    }
    if (props.primary) {
      return "3px 3px 0 rgba(8, 43, 96, 1)";
    }
    if (props.secondary) {
      return "none";
    }
  }};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: none;

    background: ${(props: ButtonProps) =>
      props.secondary && "rgba(8, 43, 96, 0.21)"};
    color: ${(props: ButtonProps) => props.secondary && "rgba(8, 43, 96, 1)"};
  }
`;
