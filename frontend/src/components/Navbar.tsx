import React from 'react'
import { AuthContext } from "../state/auth";
import { useState, useContext } from "react";


const Navbar = () => {
    const login: any = useContext(AuthContext);
    const salutation = login.user ? `Welcome, ${login.user.username}` : "Hello";
    return (
        <>
            <nav id="navbar-main" className="navbar is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item mobile-aside-button">
                        <span className="icon">
                            <i className="mdi mdi-forwardburger mdi-24px"></i>
                        </span>
                    </a>
                </div>
                <div className="navbar-menu" id="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item dropdown has-divider has-user-avatar">
                            <a className="navbar-link">
                                <div className="is-user-name">
                                    <span>{salutation}</span>
                                </div>
                                <span className="icon">
                                    <i className="mdi mdi-chevron-down"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item dropdown has-divider has-user-avatar">
                            <a className="navbar-link" onClick={login.logout}>
                                <div className="is-user-name">
                                    <span>Logout</span>
                                </div>
                                <span className="icon">
                                    <i className="mdi mdi-chevron-down"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar