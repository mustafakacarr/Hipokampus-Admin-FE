import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../hooks/useWindowSize";

const ControlPanelNavbar = () => {

    const { width } = useWindowSize()

    return (
        <nav className="navbar fixed-top navbar-expand p-0 shadow" data-bs-theme="dark"
            style={{ height: "48px", backgroundColor: "#1B1B1B" }}>
            <div className="container-fluid gx-0">
                {width >= 576
                    ? (
                        <span className="navbar-brand me-0 p-1">
                            <img
                                src="https://hipokampus.com.tr/images/logo-228x48.webp"
                                style={{ width: "200px", height: "36px" }}
                            />
                        </span>
                    ) : (
                        <>
                            <span className="me-2">
                                <a
                                    data-bs-toggle="offcanvas"
                                    className="text-light ms-3"
                                >
                                    <FontAwesomeIcon icon={faBars} size="xl" />
                                </a>
                            </span>
                            <span>
                                <img src="https://hipokampus.com.tr/images/favicon.ico"
                                    alt="Hipokampus logo" width="30" height="30" />
                            </span>
                        </>
                    )
                }
                <ul className="navbar-nav w-100">
                    <li className="nav-item ms-auto">
                        <a href="/">
                            <FontAwesomeIcon className="text-light me-3" size="xl" icon={faRightFromBracket} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default ControlPanelNavbar
