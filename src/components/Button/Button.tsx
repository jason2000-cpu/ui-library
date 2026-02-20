import { ReactHTMLElement } from 'react'
import styled from 'styled-components';

export interface ButtonProps extends ReactHTMLElement<HTMLButtonElement> {
    label?: string
    variant: string
}

const StyledButton = styled.button<ButtonProps>`
    padding: 0.5rem 1rem;
    border-radius: 6px;
    color: white;
    border: none;
    cursor: pointer;

    background-color: ${({ variant }) => 
        variant === "primary" ? "#2563eb" : "#4b5563"
    };
`


export function  Button({label, variant = "primary", ...props}: ButtonProps) {
    return (
        <StyledButton variant={variant} {...props}>{label}</StyledButton>
    )
}


