import { 
    SLayout,
    SMain
} from "./Styles";
import Sidebar from "../SidaBar/SideBar";

interface Props {
    children?: JSX.Element | null,
};

const Layout = ({ children }: Props) => {
    return (
        <SLayout>
            <Sidebar />
            <SMain>{ children }</SMain>
        </SLayout>
    )
};

export default Layout;