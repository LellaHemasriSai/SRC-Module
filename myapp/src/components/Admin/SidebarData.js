import home from "../../images/home.svg"
import timeline from "../../images/timeline.svg"
import dollar from "../../images/dollar.svg"
import create from "../../images/create.svg"
import recruit from "../../images/recruit.svg"
import check from "../../images/check.svg"
export const SidebarData = [
    {
        key:1,
        title: 'HOME',
        path: '././home',
        img: home,
        cName: 'nav-text'
    },
    {
        key:2,
        title: 'Approve Projects',
        path: '././Approve_project',
        img: check,
        cName: 'nav-text'
    },
    {
        key:6,
        title: 'Approve Recruitment',
        path: '././approve_recruitment',
        img: recruit,
        cName: 'nav-text'
    },
    {
        key:3,
        title: 'View Projects',
        path: '././view_project',
        img: create,
        cName: 'nav-text'
    },
    {
        key:4,
        title: 'Funds',
        path: '././funds',
        img: dollar,
        cName: 'nav-text'
    },
    {
        key:5,
        title: 'Duration Extension',
        path: '././duration_extension',
        img: timeline,
        cName: 'nav-text'
    }
    
];