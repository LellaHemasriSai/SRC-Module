import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Create Project',
        path: '/create_project',
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        title: 'Ongoing Projects',
        path: '/ongoing_project',
        icon: <FaIcons.FaProjectDiagram/>,
        cName: 'nav-text'
    },
    {
        title: 'Recruitment',
        path: '/recruitment',
        icon: <BsIcons.BsPeople />,
        cName: 'nav-text'
    }
];