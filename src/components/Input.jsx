import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelStyled = styled.label`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;

const InputStyled = styled.input`
  font-size: 1rem;
  padding: 10px;
  color: #fff;
  background-color: #424242;
  border-radius: 5px;
`;

const DivError = styled.div`
  color: #ff6347;
  text-align: center;
`;

export default function Input({ label, id, error, ...props }) {
  return (
    <DivStyled>
      <LabelStyled htmlFor={id}>{label} :</LabelStyled>
      <InputStyled id={id} {...props} />
      <DivError>{error && <p>{error}</p>}</DivError>
    </DivStyled>
  );
}
