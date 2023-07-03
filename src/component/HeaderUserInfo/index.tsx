import { useEffect } from "react";
import Sider from "antd/es/layout/Sider";
import { Avatar, Card, Divider } from "antd";

const HeaderUserInfo = () => {

    // const [userInfo, setUserInfo] = useState<UserInfo>({ userIcon: "", userName: "mock" })

    useEffect(() => {

    }, [])



    return (
        <>
            <div className="user-icon">
                <Sider style={{ height: "98vh" }}>
                    <Card bordered={false}>
                        <Avatar ></Avatar>
                        <div style={{ justifyContent: "center" }}>
                            <h5>User Name</h5>
                            <h6>User ID</h6>
                            <div>Self Introduction</div>
                            <div style={{ marginTop: "10px" }}>
                                <a href="/">Mock1</a>
                                <Divider type="vertical"></Divider>
                                <a href="/">Mock2</a>
                            </div>
                        </div>
                    </Card>

                </Sider>

            </div>
        </>
    );
}

export default HeaderUserInfo;