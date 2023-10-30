import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 0.5rem 0.9rem;
  color: ${(props) => (props.color ? props.color : "var(--white100)")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--brown100)"};
  transition: all 0.5s ease-in;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transform: scale(1.04);
  }
`;

export { ButtonStyled };
