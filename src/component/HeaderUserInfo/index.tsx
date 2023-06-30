import { useEffect, useState } from "react";
import { UserInfo } from "../../utils/model";
import Sider from "antd/es/layout/Sider";
import { Card, Image } from "antd";

const HeaderUserInfo = () => {

    const [userInfo, setUserInfo] = useState<UserInfo>({ userIcon: "", userName: "mock" })

    const image=

    useEffect(() => {

    }, [])

    

    return (
        <>
            <div className="user-icon">
                <Sider>
                    <Card bordered={false}>
                        <Image src="%PUBLIC_URL%/avatarMock.jpg"></Image>
                    </Card>

                </Sider>

            </div>
        </>
    );
}

export default HeaderUserInfo;