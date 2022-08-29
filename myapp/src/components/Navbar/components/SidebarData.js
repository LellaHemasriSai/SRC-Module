import home from "../../../images/home.svg"
import ongoing from "../../../images/ongoing.svg"
import recruit from "../../../images/recruit.svg"
import create from "../../../images/create.svg"
import announcements from "../../../images/announcements.svg"
import clock from "../../../images/clock.svg"
export const SidebarData = [

    {
        key:1,
        title: 'HOME',
        path: '/home',
        img: home,
        cName: 'nav-text'
    },
    {
        key:2,
        title: 'CREATE PROJECT',
        path: '/create_project',
        img: create,
        cName: 'nav-text'
    },
      /*  {
            key:6,
            title: 'Internal',
            path: '/create_project',
            img: create,
        },
        {
            key:7,
            title: 'External',
            path: '/create_project',
            img: create,
        },*/
    {
        key:3,
        title: 'ONGOING PROJECTS',
        path: '/ongoing_project',
        img: ongoing,
        cName: 'nav-text'
    },
    {
        key:4,
        title: 'RECRUITMENT',
        path: '/recruitment',
        img: recruit,
        cName: 'nav-text'
    },
        {
        key:5,
        title: 'ANNOUNCEMENTS',
        path: '/announcements',
        img: announcements,
        cName: 'nav-text'
    },
    {
        key:6,
        title: 'Pending Approvals',
        path: '/pending_approvals',
        img: clock,
        cName: 'nav-text'
    }
];