import React, { useState, useEffect  } from "react";
import Themechange  from "./Themechange";

// Create the ThemeContext
export const ThemeContext = React.createContext();

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');  // 'light' as the default theme
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]); 

  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Themechange />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeSwitch;
