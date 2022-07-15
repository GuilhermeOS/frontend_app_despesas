import { createContext, useState, useEffect } from "react";
import { createSession } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface Props {
    children?: JSX.Element | null,
};

interface AuthContextValue {
    user?: { id: string; email: string; } | null;
    authenticated?: boolean | null;
    loading?: boolean | null;
    login: Function;
    logout: Function;
    errorMessage?: string | null;
};

export const AuthContext = createContext<AuthContextValue>({
    user: null,
    authenticated: null,
    loading: null,
    errorMessage: null,
    login: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }: Props) => {

    const navigate = useNavigate();

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ errorMessage, settErrorMessage ] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        
        if (user) {
            setUser(JSON.parse(user!));
        }

        setLoading(false);
        
    }, []);

    const login = async (email: string, password: string) => {
        setLoading(true);
        
        try {
            const response = await createSession(email, password);

            settErrorMessage(null);
            
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setUser(response.data.user);
        
            navigate("/");
            setLoading(false);
        } catch (error) {
            const err = error as AxiosError;
            
            err ? settErrorMessage(err.response?.data?.error) : null
        }
    };

    const logout = () => {
        localStorage.removeItem('user');

        setUser(null);

        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ 
            authenticated: !!user,
            user,
            loading,
            errorMessage,
            login,
            logout
        }}>{ children }</AuthContext.Provider>
    );
};