import { useLocation } from "react-router-dom";

function FirstPage(){
    // const url=window.location.href
    const url=useLocation()


    return (
        <>
        first page
        {url}
        </>
    )
}

export default FirstPage;