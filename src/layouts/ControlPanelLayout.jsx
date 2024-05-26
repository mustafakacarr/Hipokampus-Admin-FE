import React from "react";
import ControlPanelHeader from "../components/layout-components/ControlPanelHeader";
import ControlPanelSidebar from "../components/layout-components/ControlPanelSidebar";

const ControlPanelLayout = ({ children }) => {
    return (
        <div className="mx-auto site-wrapper">
            <ControlPanelHeader />
            <div className="container-fluid mx-auto min-vh-100 row gx-0" style={{ marginTop: "48px" }}>
                <div className="position-fixed" style={{ width: "270px" }}>
                    <ControlPanelSidebar />
                </div>
                <div style={{ paddingLeft: "270px" }}>
                    <div className="content-wrapper mx-auto mt-4 px-2 w-100 h-100">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ControlPanelLayout;
