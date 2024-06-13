import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;

  &.regulations {
    flex-direction: row;
    color: white;
  }
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

  &:focus{
    background-color: #827e7e;
    transition: all 0.4s;
  }
`;

const DivError = styled.div`
  color: #ff6347;
  text-align: center;
`;

export default function Input({
  label,
  id,
  error,
  onFocus,
  onChange,
  ...props
}) {
  return (
    <DivStyled>
      <LabelStyled htmlFor={id}>{label} :</LabelStyled>
      <InputStyled id={id} onFocus={onFocus} onChange={onChange} {...props} />
      <DivError>{error && <p>{error}</p>}</DivError>
    </DivStyled>
  );
}
