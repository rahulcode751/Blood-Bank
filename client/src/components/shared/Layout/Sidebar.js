import React, { useEffect } from 'react'
// import { userMenu } from './Menus/userMenu'
import { useLocation, Link, } from 'react-router-dom'
import '../../../styles/Layout.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Sidebar = () => {
    const location = useLocation();
    // const isActive = location.pathname;

    /// GET USER STATE
    const { user } = useSelector(state => state.auth);


    return (
        <div>
            <div className='sidebar' style={{ width: "350px" }}>
                <div className='menu'>
                    {/*isse sari side bar ki field org and donars ko bhi dikh rhi thi*/}
                    {/* 
                     {userMenu.map((menu) => {
                        const isActive = location.pathname === menu.path;
                        return (
                            <div
                                className={`menu-item ${isActive && "active"}`}
                                key={menu.name}
                            >
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        );
                    })}
                */}
                    {/*
            */}

                    {user?.role === 'organisation' && (
                        <>
                            <div className={`menu-item ${location.pathname === '/' && "active"}`}>
                                <i className={"fa-solid fa-warehouse"}></i>
                                <Link to='/'>Inventory</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/donar' && "active"}`}>
                                <i i className={"fa-solid fa-hand-holding-medical"}></i>
                                <Link to='/donar'>Donar</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === "/hospital" && "active"}`}>
                                <i className={"fa-solid fa-hospital"}></i>
                                <Link to='/hospital'>Hospital</Link>
                            </div></>
                    )}
                    {user?.role === "admin" && (
                        <>
                            <div
                                className={`menu-item ${location.pathname === "/donar-list" && "active"
                                    }`}
                            >
                                <i className="fa-solid fa-warehouse"></i>
                                <Link to="/donar-list">Donar List</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/hospital-list" && "active"
                                    }`}
                            >
                                <i className="fa-solid fa-hand-holding-medical"></i>
                                <Link to="/hospital-list">Hospital List</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/org-list" && "active"
                                    }`}
                            >
                                <i className="fa-solid fa-hospital"></i>
                                <Link to="/org-list">Organisation List</Link>
                            </div>
                        </>
                    )}
                    {(user?.role === "donar" || user?.role === "hospital") && (
                        <>
                            <div className={`menu-item ${location.pathname === "/organisation" && "active"}`}>
                                <i className={"fa-sharp fa-solid fa-building-ngo"}></i>
                                <Link to='/organisation'>Organisation</Link>
                            </div>
                        </>
                    )}
                    {user?.role === "hospital" && (
                        <>
                            <div className={`menu-item ${location.pathname === "/consumer" && "active"}`}>
                                <i className={"fa-sharp fa-solid fa-users"}></i>
                                <Link to='/consumer'>Consumer</Link>
                            </div>
                        </>
                    )}
                    {user?.role === "donar" && (
                        <>
                            <div className={`menu-item ${location.pathname === "/donation" && "active"}`}>
                                <i className={"fa-sharp fa-solid fas fa-handshake"}></i>
                                <Link to='/donation'>Donation</Link>
                            </div>
                        </>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Sidebar
