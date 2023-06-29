import { Modal } from "antd";
import { useEffect, useState } from "react";


function  SecondModal(props:any){
    const {isActivate,isOpen,message}=props
    
    const [open,setOpen]=useState(false)

    useEffect(()=>{
        if(isActivate){
            setOpen(isOpen)
            // setOpen(true)
        }
    },[open])
    

    return(
        <>
        <Modal
        open={open}
        >
            {message}

        </Modal>
        </>
    );
    
}

export default SecondModal;