import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [

    {
        key:1,
        title: 'HOME',
        path: '/home',
        img:"myapp\images\home-solid.svg",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        key:2,
        title: 'CREATE PROJECT',
        path: '/create_project',
        img:"myapp\images\diagram-project-solid.svg",
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        key:3,
        title: 'ONGOING PROJECTS',
        path: '/ongoing_project',
        img:"myapp\images\chart-column-solid.svg",
        icon: <FaIcons.FaProjectDiagram/>,
        cName: 'nav-text'
    },
    {
        key:4,
        title: 'RECRUITMENT',
        path: '/recruitment',
        img:"myapp\src\components\Navbar\SidebarData.js",
        icon: <BsIcons.BsPeople />,
        cName: 'nav-text'
    },
        {
        key:5,
        title: 'ANNOUNCEMENTS',
        path: '/recruitment',
        img:"myapp\images\bullhorn-solid.svg",
        icon: <BsIcons.BsPeople />,
        cName: 'nav-text'
    }
];

