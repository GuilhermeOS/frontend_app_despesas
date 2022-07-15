import { useContext } from "react";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

export const SidebarData = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/"
    },
    {
        label: "Despesas",
        icon: <AiOutlineHome />,
        to: "/despesas"
    },
    {
        label: "Receitas",
        icon: <AiOutlineHome />,
        to: "#"
    },
    {
        label: "Adicionar",
        icon: <AiOutlineHome />,
        to: "#"
    },
];

export const secondaryLinks = [
    {
        label: "Sair",
        icon: <MdLogout />,
    },
];