import styled from "styled-components";
import { motion } from 'framer-motion'

export const SidebarContainer = styled.nav`
    width: ${ p => p.isOpen ? '20%' : '5%'};
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background-color: red;
    transition: width 500ms ease-in-out;
`;

export const FlexDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const SidebarLogoContainer = styled(FlexDivColumn)`
    background-color: green;
    margin: 2em 0;
`

export const SidebarLinksContainer = styled(FlexDivColumn)`
    background-color: yellow;
    flex-grow: 1;
`;

export const SidebarActionButonsContainer = styled(FlexDivColumn)`
    background-color: pink;
    margin: 2em 0;
`;
