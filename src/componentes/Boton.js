import React from "react";


function Boton({ text,isButtonClic,taller }){
    return(
        <button className={ isButtonClic ? 'button-clic' : 'button-reset' } onClick={taller}>{text}</button>  
    );
}

export default Boton;