import React from "react";
import ControlPanelLayout from "../layouts/ControlPanelLayout";
import UserTable from "../components/user-components/UserTable";

const ControlPanel = () => {
  return (
    <ControlPanelLayout>
        <UserTable />
    </ControlPanelLayout>
  );
};

export default ControlPanel;
