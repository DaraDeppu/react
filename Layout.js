import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/MyForm">MyForm</Link>
                </li>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
                <li>
                    <Link to="/Component">Component</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default Layout;