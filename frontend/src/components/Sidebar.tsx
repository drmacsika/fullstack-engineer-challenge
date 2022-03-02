import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <aside className="aside is-placed-left is-expanded">
                <div className="aside-tools">
                    <div>
                        Feather Insurance <b className="font-black">Admin</b>
                    </div>
                </div>
                <div className="menu is-menu-main">
                    <ul className="menu-list">
                        <li className="--set-active-index-html">
                            <a>
                            <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                            <span className="menu-item-label">
                                <Link to="/dashboard">Dashboard</Link>
                            </span>
                            </a>
                        </li>
                        <li className="--set-active-index-html">
                            <a>
                            <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                            <span className="menu-item-label">
                                <Link to="/profile">Profile</Link>
                            </span>
                            </a>
                        </li>
                        <li className="--set-active-index-html">
                            <a>
                            <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
                            <span className="menu-item-label">
                                <Link to="/create-admin">Create New Admin</Link>
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
                </aside>
        </>
    )
}

export default Sidebar