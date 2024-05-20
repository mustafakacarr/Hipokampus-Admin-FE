import ControlPanel from "../pages/ControlPanel"
import SignIn from "../pages/SignIn"

var SiteRoutes = [
    {
        path: "/",
        component: <SignIn />,
    },
    {
        path: "/control-panel",
        component: <ControlPanel />
    }
];


export default SiteRoutes;
