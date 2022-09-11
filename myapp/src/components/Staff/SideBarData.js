import home from "../../images/home.svg"
import offers from "../../images/offers.svg"
//import resume from "../../images/resume.svg"
import opportunites from "../../images/opportunites.svg"
import applications from "../../images/applications.svg"
import ongoing from "../../images/ongoing.svg"
import completed from "../../images/completed.svg"
export const SidebarData = [
    {
        key:1,
        title: 'Home',
        path: '././studentHome',
        img: home,
        cName: 'nav-text'
    },
    {
        key:2,
        title: 'Opportunites',
        path: '././opportunites',
        img: opportunites,
        cName: 'nav-text'
    },
        {
        key:3,
        title: 'Ongoing Projects',
        path: '././staff_ongoing',
        img: ongoing,
        cName: 'nav-text'
    },
    {
        key:4,
        title: 'Completed Projects',
        path: '././staff_completed',
        img: completed,
        cName: 'nav-text'
    },
        {
        key:5,
        title: 'Applications',
        path: '././staff_applications',
        img: applications,
        cName: 'nav-text'
    },
    {
        key:6,
        title: 'Offers',
        path: '././offers',
        img: offers,
        cName: 'nav-text'
    },
 /*   {
        key:4,
        title: 'Resumes',
        path: '././resumes',
        img: resume,
        cName: 'nav-text'
    },
*/
    
];