import {Theme} from "../context/ThemeContext";

export const changeCSSRootVariables = (theme: Theme) => {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
        'body-background',
        'components-background',
        'card-background',
        'card-shadow',
        'text-color'
    ];
    components.forEach(c => {
        root.style.setProperty(
            `--${c}-default`, `var(--${c}-${theme})`
        )
    })
}