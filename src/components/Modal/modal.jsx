import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

import classes from "./modal.module.css";

const Modal = (props) => {
    const [root] = useState(document.createElement('div'));
    useEffect(() =>{
        document.body.appendChild(root);
        return () => {
            document.body.removeChild(root);
        }
    });
    return ReactDOM.createPortal(
        <div className={classes.modal}>
            {props.children}
        </div>,
        root
    );
}

export default Modal;