import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ControlPanelNavbar = () => {
    return (
        <nav className="navbar navbar-expand sticky-top bg-dark p-1 shadow" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <img src="https://hipokampus.com.tr/images/logo-228x48.webp" style={{height:"32px"}}/>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#controlPanelNavbarDropdown" aria-controls="controlPanelNavbarDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="controlPanelNavbarDropdown">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item ms-auto">
                            <a href="/">
                                <FontAwesomeIcon className="text-light" size="xl" icon={faRightFromBracket} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default ControlPanelNavbar
