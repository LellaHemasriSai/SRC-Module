import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import home from "./images/home.svg"
import ongoing from "./images/ongoing.svg"
import recruit from "./images/recruit.svg"
import create from "./images/create.svg"
import announcements from "./images/announcements.svg"

export const SidebarData = [

    {
        key:1,
        title: 'HOME',
        path: '/home',
        img: {home},
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        key:2,
        title: 'CREATE PROJECT',
        path: '/create_project',
        img: create,
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        key:3,
        title: 'ONGOING PROJECTS',
        path: '/ongoing_project',
        img: ongoing,
        icon: <FaIcons.FaProjectDiagram/>,
        cName: 'nav-text'
    },
    {
        key:4,
        title: 'RECRUITMENT',
        path: '/recruitment',
        img: recruit,
        icon: <BsIcons.BsPeople />,
        cName: 'nav-text'
    },
        {
        key:5,
        title: 'ANNOUNCEMENTS',
        path: '/recruitment',
        img: announcements,
        icon: <BsIcons.BsPeople />,
        cName: 'nav-text'
    }
];

