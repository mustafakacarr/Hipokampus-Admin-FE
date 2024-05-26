import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ControlPanelNavbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand p-0 shadow" data-bs-theme="dark"
         style={{height: "48px", backgroundColor: "#1B1B1B"}}>
            <div className="container-fluid gx-0">
                <span className="navbar-brand col-md-3 col-lg-2 me-0 p-1">
                <img
                    src="https://hipokampus.com.tr/images/logo-228x48.webp"
                    style={{ width: "200px", height: "36px" }}
                />
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
                                <FontAwesomeIcon className="text-light me-3" size="xl" icon={faRightFromBracket} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default ControlPanelNavbar
