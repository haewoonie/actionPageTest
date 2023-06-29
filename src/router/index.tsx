import { Route, Routes } from "react-router-dom";
import FirstPage from "../page";

function MyRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FirstPage />}></Route>
                <Route path="/go?/:id" element={<FirstPage />}></Route>
                <Route path="/go" element={<FirstPage />}></Route>
                <Route path="/his" element={<FirstPage />}></Route>
            </Routes>
        </>
    )
}

export default MyRouter;