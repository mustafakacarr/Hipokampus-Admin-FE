import React from "react";

const ControlPanelSidebar = () => {
    return (
        <div className="sidebar position-fixed bg-dark h-100 ps-2 scrollbar-hidden"
            style={{ width: "270px", overflowY: "scroll" }}>
            <br />
            <span className="text-light fs-5 ms-2">
                Seçenek 1
            </span>
            <br />
            <span className="text-light fs-5 ms-2">
                Seçenek 2
            </span>
            <br />
            <span className="text-light fs-5 ms-2">
                Seçenek 4
            </span>
            <br />
            <span className="text-light fs-5 ms-2">
                Seçenek 4
            </span>
            <br />
            <span className="text-light fs-5 ms-2">
                Seçenek 5
            </span>
        </div>
    )
}

export default ControlPanelSidebar
