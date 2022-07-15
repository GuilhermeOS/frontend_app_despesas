import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../variables";

interface PropsStyled {
    isOpen: boolean;
    isActive: boolean;
}

export const SSidebar = styled.div<PropsStyled>`
    width: ${({ isOpen }) => !isOpen ? `auto` : v.sidebarWidth};
    background: ${({ theme }) => theme.primaryColor };
    min-height: 100vh;
    padding: ${ v.lgSpacing };

    position: relative;
`;

export const SSidebarButton = styled.button<PropsStyled>`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColor };
    box-shadow: 0 0 4px ${({ theme }) => theme.treeColor}, 0 0 7px ${({ theme }) => theme.primaryColor };
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.treeColor };
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div<PropsStyled>`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.treeColor )};
    border-radius:  ${ v.borderRadius };
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.secondaryColor }
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkLgout = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    cursor: pointer;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const SThemeToggler = styled.button<PropsStyled>`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.hoverToggle : theme.hoverToggle)};

    position: relative;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: .2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) =>  theme.primaryColor };
`;