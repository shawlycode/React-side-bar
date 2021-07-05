import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageviewIcon from '@material-ui/icons/Pageview';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

export const SideBarData =[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/Home"
    },
    {
        title:"Shop",
        icon:<LocalMallIcon/>,
        link:"/shop"
    },
    {
        title:"Account",
        icon:<AccountCircleIcon/>,
        link:"/account"
    },
    {
        title:"Graph",
        icon:<AssessmentIcon/>,
        link:"/graph"
    },
    {
        title:"Search",
        icon:<PageviewIcon/>,
        link:"/search"
    },
    {
        title:"Gallery",
        icon:<PhotoLibraryIcon/>,
        link:"/gallery"
    }
];
