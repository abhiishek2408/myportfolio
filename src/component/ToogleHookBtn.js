import React from "react";
import CustomHookToggleBtn from './CustomHookToggleBtn';

const ToogleBtn = () =>{
    const [isToggled,toggle] = CustomHookToggleBtn(false);
    return(
        <div>
        <h1> {isToggled ? 'ON':'OFF'}</h1>
        <button onClick={toggle}>{isToggled ? 'OFF':'ON'}
        </button>
        
        </div>
    );
}

export default ToogleBtn;