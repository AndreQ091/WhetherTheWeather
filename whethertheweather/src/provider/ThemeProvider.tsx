import {FC, ReactNode, useState} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import {changeCSSRootVariables} from "../utils/changeCSSRootVariables";
import {storage} from "../utils/storage";

interface Props {
    children: ReactNode
}

export const ThemeProvider: FC<Props> = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
    changeCSSRootVariables(theme);
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCSSRootVariables(theme);
    }
    return <ThemeContext.Provider value={
        {theme, changeTheme}
    }
                                  {...props}>
        {children}
    </ThemeContext.Provider>
}