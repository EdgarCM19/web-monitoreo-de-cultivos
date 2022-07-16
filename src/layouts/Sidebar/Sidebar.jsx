import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarActionButonsContainer, SidebarContainer, SidebarLinksContainer, SidebarLogoContainer } from "./SidebarElements";

import { sidebarContainerAnimation } from "./SidebarAnimations";

const Sidebar = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <SidebarContainer isOpen={isOpen} >
            <SidebarLogoContainer>
                <div style={{width: '100px', height: '100px'}} />
            </SidebarLogoContainer>
            <SidebarLinksContainer>
                <Link to='/'>Main</Link>
                <Link to='/calendar'>calendar</Link>
            </SidebarLinksContainer>
            <SidebarActionButonsContainer>
                <button onClick={() => setOpen(!isOpen)}>Toggle</button>
            </SidebarActionButonsContainer>
        </SidebarContainer>
        {children}
        </>
    )
}

export default Sidebar;