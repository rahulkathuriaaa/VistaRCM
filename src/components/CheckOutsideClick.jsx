import { useEffect } from "react";
import { useRef } from "react";

function CheckOutsideClick(props) {
    const ref = useRef(null);
    const { onCLickOutside, children } = props;

    const handleClickOutside = (event) =>{
        if (ref.current && !ref.current.contains(event.target)) {
            onCLickOutside && onCLickOutside();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside,true);
        return()=>{
            document.removeEventListener('click', handleClickOutside,true);
             
        }
    },[]);

    if (!children){
        return null;
    }
    return <div ref={ref}>{children}</div>
}

export default CheckOutsideClick;