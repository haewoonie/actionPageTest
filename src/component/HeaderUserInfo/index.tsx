import { useEffect, useState } from "react";
import { UserInfo } from "../../utils/model";

const HeaderUserInfo=()=>{

    const [userInfo,setUserInfo]=useState<UserInfo>({userIcon:"",userName:"mock"})
    
    useEffect(()=>{
        
    },[])

    return (
        <>
        <div className="user-icon"></div>
        </>
    );
}

export default HeaderUserInfo;