import AddPost from "../pages/AddPost";
import GetPost from "../pages/GetPost";
import VeiwPost from "../pages/VeiwPost";

export const routes = [
    {
        id:"getAllPost",
        path:"/",
        component: <GetPost />
    },
    {
        id:"veiwPost",
        path:"/veiwpost/:id",
        component: <VeiwPost />
    },
    {
        id:"AddPost",
        path:"/createpost",
        component: <AddPost />
    }
]