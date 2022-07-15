import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// IMPORT AUTHENTICATED CONTEXT
import { AuthProvider, AuthContext } from "./Context/auth";
import { ThemeContext } from "./Context/theme";

// IMPORT GLOBAL STYLES
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global_styles";

// IMPORT PAGES
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import Despesas from "./Pages/Despesas";

interface Props {
    children?: JSX.Element | null,
};

const AppRoutes = () => {
    const [ theme, setTheme ] = useState("light");

    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    const Private = ({ children }: Props ) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Carregando ...</div>
        };

        if (!authenticated) {
            return <Navigate to="/login"/>
        }

        return children ? children : null;
    };

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={ themeStyle }>
                <GlobalStyles />
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route path="/login" element={ <LoginPage /> }/>
                            <Route path="/" element={ <Private><MainPage /></Private> }/>
                            <Route path="/despesas" element={ <Private><Despesas /></Private> }/>
                        </Routes>
                    </AuthProvider>
                </Router>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};

export default AppRoutes;