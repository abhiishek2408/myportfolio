import { useState } from 'react';

const ToogleBtn = () =>{

        const [value, setValue] = useState(false);
        const toggle = () =>{
            setValue(prev => !prev);
        }
  
    return  [value,toggle];
}

export default ToogleBtn;