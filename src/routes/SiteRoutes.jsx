import MainPage from "../pages/MainPage"
import SignIn from "../pages/SignIn"

var SiteRoutes = [
    {
        path: "/",
        component: <SignIn />,
    },
    {
        path: "/main-page",
        component: <MainPage />
    }
];


export default SiteRoutes;
