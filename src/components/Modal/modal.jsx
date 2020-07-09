import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const Modal = (props) => {
    const [root] = useState(document.createElement('div'))


    useEffect(() =>{
        document.body.appendChild(root);

        return () => {
            document.body.removeChild(root);
        }
    })

    return ReactDOM.createPortal(
            <div className={"modal"}>
                {props.children}
            </div>,
            root
        );
}

export default Modal;
