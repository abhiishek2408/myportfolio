import './mystyle.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeSwitch';

const Themechange = () => {
  const [theme, setTheme] = useContext(ThemeContext);  // Use the correct context

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Themechange;
