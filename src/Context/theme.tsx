import { createContext, useState, useEffect } from "react";

interface ThemeContextValue {
    theme: string ;
    setTheme: React.Dispatch<React.SetStateAction<string>>; 
};

export const ThemeContext = createContext<ThemeContextValue>({
    theme: "light",
    setTheme: () =>{}
});