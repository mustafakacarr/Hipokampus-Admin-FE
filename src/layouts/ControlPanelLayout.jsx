import React from "react";
import ControlPanelHeader from "../components/layout-components/ControlPanelHeader";
import ControlPanelSidebar from "../components/layout-components/ControlPanelSidebar";
import useWindowSize from "../hooks/useWindowSize";

const ControlPanelLayout = ({ children }) => {

    const { width } = useWindowSize()

    return (
        <div className="mx-auto site-wrapper">
            <ControlPanelHeader />
            <div className="container-fluid mx-auto row gx-0" style={{ marginTop: "48px" }}>
                {width >= 576
                    ? (
                        <ControlPanelSidebar />
                    ) : null
                }
                <div style={
                    width >= 576
                        ? {
                            paddingLeft: "220px"
                        }
                        : {}}>
                    <div className="content-wrapper mx-auto mt-4 px-2 w-100 h-100">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ControlPanelLayout;
