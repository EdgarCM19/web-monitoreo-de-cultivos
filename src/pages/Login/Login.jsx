import { InputItem, InputsContainer, InputText, LinkF, LoginBackground, LoginForm, LogoContainer, SubmitButton, Title } from "./LoginElements";
import { bg_animation, from_animation, inputs_animation, logo_animation, title_animation } from "./LoginAnimations";

import { FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo_img.svg';
import logoTxt from '../../assets/logo_txt.svg';

const Login = () => {
    return (
        <LoginBackground
            animate={bg_animation.animate}
            transition={bg_animation.transition}
        >
            <LoginForm
                action="#"
                method="POST"
                animate={from_animation.animate}
                transition={from_animation.transition}
            >
                <LogoContainer
                    animate={logo_animation.animate}
                    transition={logo_animation.transition}
                >
                    <img src={logoImg} className="logoimg" alt="Logo imagen"/>
                    <img src={logoTxt} className="logotxt" alt="Logo texto"/>
                </LogoContainer>
                <Title
                    animate={title_animation.animate}
                    transition={title_animation.transition}
                >Plataforma de monitoreo de cultivos</Title>
                <InputsContainer
                    animate={inputs_animation.animate}
                    transition={inputs_animation.transition}
                >
                    <InputItem>
                        <FiUser className="icon"/>
                        <InputText placeholder="Usuario" autoComplete="off" name="user" id="user"/>
                    </InputItem>
                    <InputItem>
                        <FiLock className="icon"/>
                        <InputText placeholder="Contraseña" autoComplete="off" name="pass" id="pass"/>
                    </InputItem>
                    <SubmitButton value="Ingresar"/>
                    <LinkF href="#">¿Olvidaste tu contraseña?</LinkF>
                </InputsContainer>
            </LoginForm>
        </LoginBackground>
    )
}

export default Login;