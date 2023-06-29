import SecondModal from "../SecondModal";
import { useState } from "react";
import { Button } from "antd";

function FirstPage(){
    // const url=window.location.href
    const [isTrue,setIsTrue]=useState(false)

    const onClick=()=>{
        setIsTrue(!isTrue)
        console.log(isTrue)
    }


    return (
        <>
        first page
        <Button onClick={onClick}></Button>
        <SecondModal 
        isActivate={true}
        isOpen={isTrue}
        message={"dddd"} />
        </>
    )
}

export default FirstPage;