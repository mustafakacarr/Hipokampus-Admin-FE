import React from "react";
import ControlPanelHeader from "../components/layout-components/ControlPanelHeader";

const ControlPanelLayout = ({ children }) => {
    return (
        <div className="mx-auto site-wrapper">
            <ControlPanelHeader />
            <div className="container-fluid mx-auto min-vh-100 mt-4 px-2 gx-0 content-wrapper">
                {children}
            </div>
        </div>
    );
};

export default ControlPanelLayout;
