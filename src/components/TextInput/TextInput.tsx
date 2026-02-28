import styled from "styled-components"

export interface TextInputProps {
    label: string
    placeholder: string
    color: string
    type: "number" | "text"
    name: string
}


const StyledInput = styled.input<{$color: string}>`
    border-radius: 3px;
    margin-top: 10px;
    padding: 0.5em;
    width: 100%;
    height: 3rem;
    font-size: 16px;
    border: ${({ $color }) => `2px solid ${$color}`
    };
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export function TextInput({ name, label, placeholder, type, color }: TextInputProps) {
  return (
    <StyledDiv >
        <label htmlFor={name}>{ label }</label>
        <StyledInput name={name} placeholder={placeholder} type={type} $color={color} />
    </StyledDiv>
  )
}

