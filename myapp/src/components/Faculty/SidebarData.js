import home from "../../images/home.svg"
import ongoing from "../../images/ongoing.svg"
import announcements from "../../images/announcements.svg"
import clock from "../../images/clock.svg"
import completed from "../../images/completed.svg"
import applications from "../../images/applications.svg"
import recruit from "../../images/recruit.svg"
export const data = [{
        key: 'a',
        title: 'Home',
        path: '././home',
        img: home,
        cName: 'nav-text'
    },
    {
        key: 'c',
        title: 'Ongoing Projects',
        path: '././ongoing_project',
        img: ongoing,
        cName: 'nav-text'
    },
    {
        key: 'd',
        title: 'Pending Approvals',
        path: '././pending_approvals',
        img: clock,
        cName: 'nav-text'
    },
    {
        key: 'e',
        title: 'Completed Projects',
        path: '././completed_projects',
        img: completed,
        cName: 'nav-text'
    },
    {
        key: 'h',
        title: 'Request Recruitment',
        path: '././recruitment',
        img: recruit,
        cName: 'nav-text'
    },
    {
        key: 'f',
        title: 'Applications',
        path: '././applications',
        img: applications,
        cName: 'nav-text'
    },
    {
        key: 'g',
        title: 'Announcements',
        path: '././announcements',
        img: announcements,
        cName: 'nav-text'
    }
];