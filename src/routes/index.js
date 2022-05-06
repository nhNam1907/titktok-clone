import { HeaderOnly } from "../components/Layout";
import Folowing from "../pages/folow/Folowing";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Search from "../pages/Search";
import Upload from "../pages/Upload";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/folowing', component: Folowing },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }