import home from "../../../images/home.svg"
import ongoing from "../../../images/ongoing.svg"
import announcements from "../../../images/announcements.svg"
import clock from "../../../images/clock.svg"
import completed from "../../../images/completed.svg"
export const data = [

    {
        key:'a',
        title: 'HOME',
        path: '././home',
        img: home,
        cName: 'nav-text'
    },
  /*  {
        key:'b',
        title: 'CREATE PROJECT',
        path: '/create_project',
        img: create,
        cName: 'nav-text'
    },
     {
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
        },
            {
        key:'f',
        title: 'RECRUITMENT',
        path: '/recruitment',
        img: recruit,
        cName: 'nav-text'
    },*/
    {
        key:'c',
        title: 'ONGOING PROJECTS',
        path: '././ongoing_project',
        img: ongoing,
        cName: 'nav-text'
    },
    {
        key:'d',
        title: 'Pending Approvals',
        path: '././pending_approvals',
        img: clock,
        cName: 'nav-text'
    },
    {
        key:'e',
        title: 'Completed Projects',
        path: '././completed_projects',
        img: completed,
        cName: 'nav-text'
    },
    {
        key:'g',
        title: 'ANNOUNCEMENTS',
        path: '././announcements',
        img: announcements,
        cName: 'nav-text'
    }
];