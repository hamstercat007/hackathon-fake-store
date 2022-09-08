//create a checkbox.
//create the function to switch the theme
import './index.css'
import { useThemeContext } from "../../context/theme";

//when you trigger an event on a html element,
//it will bubble up until it gets to an element that can handle it.
//and it will not bubble up anymore, will stop there.

//if it's checked or not by default

function ThemeSwitcher() {
  //darkTheme is initially false
  const { toggleTheme, darkTheme } = useThemeContext();
  return (
    <label className="switch">
      <input type="checkbox" onClick={toggleTheme} checked={!darkTheme} />
      <span className="slider round"></span>
    </label>
  );
}

export default ThemeSwitcher;
