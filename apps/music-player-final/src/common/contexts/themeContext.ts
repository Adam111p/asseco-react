import { createContext } from 'react';

export type Theme = {
 theme:string
}

export const themeContext = createContext<Theme | null>({theme:"light"});

export const ThemeContextProvider = themeContext.Provider;
export const ThemeContextConsumer = themeContext.Consumer;
