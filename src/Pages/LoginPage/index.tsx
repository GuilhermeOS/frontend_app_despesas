import { useContext } from "react";
import { AuthContext } from "../../Context/auth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

// IMPORT STYLES
import {
    StyledContainer,
    StyledFormContainer,
    StyledHeadForm,
    StyledFormTitle,
    StyledLoginError,
    StyledForm,
    StyledInputField,
    StyledInput,
    StyledMessageError,
    StyledButton,
    StyledFormFooter,
    StyledContainerFooter,
    StyleTitleFooter,
    StyledFooterLink
} from "./styles";

interface IFormInputs {
    email: string;
    password: string;
};

const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

    const { authenticated, login, errorMessage } = useContext(AuthContext);
    const navigate = useNavigate();

    if (authenticated) {
        navigate("/");
    };

    const onSubmit: SubmitHandler<IFormInputs> = data => login(data.email, data.password);

    return (
        <StyledContainer>
            <StyledFormContainer>
                <StyledHeadForm>
                    <StyledFormTitle>Entrar</StyledFormTitle>
                </StyledHeadForm>
                { errorMessage ? 
                    <StyledLoginError>
                        {errorMessage}
                    </StyledLoginError> 
                    : null
                }
                <StyledForm onSubmit={ handleSubmit(onSubmit) }>
                    <StyledInputField>
                        <StyledInput 
                            placeholder="Email de login"
                            {...register("email", { 
                                required: "Este campo é obrigatório...",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Formato de email inválido...",
                                },
                            })}
                        />
                        { errors.email && <StyledMessageError>{ errors.email.message }</StyledMessageError> }
                    </StyledInputField>

                    <StyledInputField>
                        <StyledInput 
                            placeholder="Senha"
                            type="password"
                            { ...register("password", {
                                required: "Este campo é obrigatório...",
                            })}
                        />
                        { errors.password && <StyledMessageError>{ errors.password.message }</StyledMessageError> }

                        <StyledButton type="submit" value="Entrar"/>
                    </StyledInputField>
                </StyledForm>
                <StyledFormFooter>
                    <StyledFooterLink to="#">
                        Esqueceu a senha?
                    </StyledFooterLink>
                        <StyleTitleFooter>
                            Ainda não possui uma conta? 
                            <StyledFooterLink to="#" style={{ marginLeft: "5px" }}>
                                Crie sua conta aqui!
                            </StyledFooterLink>
                        </StyleTitleFooter>
                        
                </StyledFormFooter>
            </StyledFormContainer>
        </StyledContainer>
    )
};

export default LoginPage;