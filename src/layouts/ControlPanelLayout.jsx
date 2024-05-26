import React from "react";
import ControlPanelHeader from "../components/layout-components/ControlPanelHeader";
import ControlPanelSidebar from "../components/layout-components/ControlPanelSidebar";

const ControlPanelLayout = ({ children }) => {
    return (
        <div className="mx-auto site-wrapper">
            <ControlPanelHeader />
            <div className="container-fluid mx-auto min-vh-100 row gx-0" style={{marginTop: "48px"}}>
                <div className="col-md-3 col-lg-2">
                    <ControlPanelSidebar />
                </div>
                <div className="col-md-9 col-lg-10 content-wrapper mx-auto mt-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ControlPanelLayout;
