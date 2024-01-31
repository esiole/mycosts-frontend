import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>Main layout</div>
            <Outlet />
        </>
    );
};

export default Layout;
