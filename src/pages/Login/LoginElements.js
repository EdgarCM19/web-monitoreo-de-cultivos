import { motion } from "framer-motion";
import styled from "styled-components";

import bgImg from '../../assets/img_bg.jpg';

//Breakpoints
    // //Mobile
    // @media screen and (max-width: 767px){

    // }

    // //Tablet
    // @media screen and (min-width: 768px) and (max-width: 1023px) {

    // }
    

export const LoginBackground = styled(motion.div)`
    background: url(${bgImg});
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* //Mobile
    @media screen and (max-width: 767px){

    }

    /* //Tablet */
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 90%;
    }
`

export const LoginForm = styled(motion.form)`
    padding: 3em 1.5em;
    width: 25%;
    height: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;

    //Mobile
    @media screen and (max-width: 767px){
        /* font-size: 1.25em; */
        width: 80%;
        height: 75%;
    }

    //Tablet
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 65%;
        height: 80%;
    }
    
`;

export const LogoContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & .logoimg {
        width: 10em;
        height: 10em;
    }

    & .logotxt {
        width: 15em;
        height: 5em;
    }

    //Mobile
    @media screen and (max-width: 767px){
        /* margin-bottom: 1em; */

        & .logoimg {
            width: 9em;
            height: 9em;
        }
        
        & .logotxt {
            width: 12em;
            height: 5em;
            margin-left: -1em;
            margin-top: .5em;
        }
    }

    // //Tablet
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }
`

export const Title = styled(motion.h1)`
    font-family: 'Lato', sans-serif;
    font-size: 1.75em;
    color: white;
    text-align: center;
    padding: 0;
    margin-top: 1em;
    /* margin-bottom: 2em; */
    text-transform: uppercase;

    //Mobile
    @media screen and (max-width: 767px){
        font-size: 1.25em;
        /* margin-bottom: 5em; */
    }

    //Tablet
    @media screen and (min-width: 768px) and (max-width: 1023px) {

    }
`

export const InputsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    overflow: none;

    //Mobile
    @media screen and (max-width: 767px){
    }

    //Tablet
    @media screen and (min-width: 768px) and (max-width: 1023px) {

    }
`

export const InputItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    border: 1px solid white;
    padding: .5em 1em;
    border-radius: .5em;
    margin-bottom: 1.5em;

    & .icon {
        color: white;
        width: 1.5em;
        height: 1.5em;
    }
`

export const InputText = styled.input.attrs({type: 'text'})`
    width: 90%;
    background-color: transparent;
    color: white;
    border: none;
    height: 100%;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    margin-left: 1em;

    &:focus {
        background-color: transparent;
        border: none;
        outline: none;
    }

    &::placeholder { color: white; }
`

export const SubmitButton = styled.input.attrs({type: 'submit'})`
    background-color: #5ABF1B;
    color: white;
    outline: none;
    border: none;
    font-size: 1.75em;
    font-family: 'Montserrat', sans-serif;
    padding: .5em 2em;
    border-radius: .25em;
    margin-top: 1em;


`
export const LinkF = styled.a`
    text-decoration: none;
    color: white;
    opacity: .75;
    font-size: .75em;
    font-family: 'Montserrat', sans-serif;
    margin-top: .5em;
`