
import HeaderOnly from "../components/Layout/HeaderOnly";
import Folowing from "../pages/folow/Folowing";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Upload from '../pages/Upload/Upload';
import Search from '../pages/Search/Search'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/folowing', component: Folowing },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }