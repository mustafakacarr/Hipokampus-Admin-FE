import { faBriefcase, faBullhorn, faBurger, faCalendarDays, faChartPie, faConciergeBell, faHandshake, faList, faMugHot, faPen, faPercent, faTag, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ControlPanelSidebar = () => {
    return (
        <div className="sidebar position-fixed bg-dark h-100 ps-3 scrollbar-hidden"
            style={{ width: "240px", overflowY: "scroll", paddingBottom: "70px" }}>
            <ul className="nav nav-pills flex-column mb-auto gap-4 mt-4">
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faChartPie} size="lg" />
                        <span className="ms-2">Ana Sayfa</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faBullhorn} size="lg" />
                        <span className="ms-2">Duyurular</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faPen} size="lg" />
                        <span className="ms-2">İçerikleri Düzenle</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faBriefcase} size="lg" />
                        <span className="ms-2">Ofis Yönetimi</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faCalendarDays} size="lg" />
                        <span className="ms-2">Etkinlikler</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faUserGroup} size="lg" />
                        <span className="ms-2">Seminerler</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faList} size="lg" />
                        <span className="ms-2">Rezervasyonlar</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faHandshake} size="lg" />
                        <span className="ms-2">Teklifler</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faTag} size="lg" />
                        <span className="ms-2">Fiyat Paketleri</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faPercent} size="lg" />
                        <span className="ms-2">Kampanyalar</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faConciergeBell} size="lg" />
                        <span className="ms-2">Siparişler</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faMugHot} size="lg" />
                        <span className="ms-2">Kafe</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navOption) =>
                            navOption.isActive
                                ? "sidebar-active"
                                : "sidebar-not-active"
                        }
                        to="/#"
                    >
                        <FontAwesomeIcon width={20} height={20} icon={faBurger} size="lg" />
                        <span className="ms-2">Catering</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ControlPanelSidebar
