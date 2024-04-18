import { createContext, ReactNode, useState } from 'react';

export type TTheme = 'light' | 'dark';

export type ThemeProps = {
  children?: ReactNode;
};

interface IThemeContext {
  theme: TTheme;
  setTheme?: React.Dispatch<React.SetStateAction<TTheme>>;
}

const ThemeContext = createContext<IThemeContext>({ theme: 'light' });

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<TTheme>('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
