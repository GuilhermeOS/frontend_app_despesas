import {
    SSidebar,
    SDivider,
    SLinkContainer,
    SLink,
    SLinkIcon,
    SLinkLabel,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
    SSidebarButton,
    SLinkLgout
} from "./Styles";
import { SidebarData, secondaryLinks } from "./Sidebar.data";

import { ThemeContext } from "../../Context/theme";
import { useContext, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

import { AuthContext } from "../../Context/auth";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {

    const { logout } = useContext(AuthContext);

    const { setTheme, theme } = useContext(ThemeContext);
    const [ sidebarOpen, setSidebarOpen ] = useState(false);

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            {!sidebarOpen ? 
                <h1>PB</h1>
                :
                <div>
                    <h1>Poupa Burro</h1>
                </div>
            }
            <SDivider />
            { SidebarData.map((data, index) => (
                <SLinkContainer key={ index }>
                    <SLink to={ data.to } style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon title={data.label}>{ data.icon }</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{ data.label }</SLinkLabel>
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <SLinkContainer onClick={ logout }>
                <SLinkLgout style={!sidebarOpen ? { width: `fit-content` } : {}}>
                    <SLinkIcon title="Sair"><MdLogout /></SLinkIcon>
                    {sidebarOpen && (
                        <>
                            <SLinkLabel>Sair</SLinkLabel>
                        </>
                    )}
                </SLinkLgout>
            </SLinkContainer>
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>{ theme === "light" ? "Dark Mode" : "Light Mode" }</SThemeLabel>}
                <SThemeToggler 
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? {right: "1px"} : {}}/>
                </SThemeToggler>
            </STheme>
        </SSidebar>
    )
};

export default Sidebar;