import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDark from "../../hooks/useDark";
 
export default function Switcher() {
    const [colorTheme, setTheme] = useDark();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}