import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    padding: 30px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items: center;
    postition: relative:
    border-radius: 2px;
`;

// header
const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3}
`;


const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 24.375rem;
  width: 37px;
  height: 37px;
  padding: 0;
`;


export const SignUpModal = () => {
    return(
    <ModalWrapper>
        <img src={Illustrations.SignUp} alt="Sign up for an account!" />
        <SignUpHeader>Sign Up!</SignUpHeader>
        <SignUpText>
            Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
            Sign Up
        </PrimaryButton>
        <CloseModalButton aria-label='Close modal'>
            <CloseIcon />
        </CloseModalButton>
    </ModalWrapper>
    );
}
