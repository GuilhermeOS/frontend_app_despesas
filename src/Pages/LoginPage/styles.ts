import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
`;

export const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 400px;
    min-height: 450px;
`;

export const StyledFormTitle = styled.h1`
    color: #C490D1;
`;

export const StyledHeadForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    width: 100%;
    min-height: 200px;
`;

export const StyledLoginError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FD7B7B;
    color: #EE0E0E;
    width: 81%;
    padding: 10px 0;
    border-radius: 5px;
`;

export const StyledInputField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 10px 0;
`;

export const StyledInput = styled.input`
    outline: none;
    padding: 16px 22px;
    border: 1px solid #C490D1;
    font-size: 18px;
    border-radius: 5px;

    &:focus
    {
    border: 2px solid #7209B7;
    }
`;

export const StyledMessageError = styled.p`
    margin: 0;
    padding: 5px 5px;
    font-size: 12px;
    font-style: italic;
    color: red;
`;

export const StyledButton = styled.input`
    cursor: pointer;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border: none;
    background-color: #C490D1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    transition: 300ms;

    &:hover {
        background-color: #7209B7;
    }
`;

export const StyledFormFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

export const StyledContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const StyledFooterLink = styled(Link)`
    text-decoration: none;
    color: #C490D1;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const StyleTitleFooter = styled.p`
    font-size: 14px;
    color: #7209B7;
    font-weight: bold;
`;