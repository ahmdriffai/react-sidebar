import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Overview",
        path: "/overview",
        icon: <FaIcons.FaCartPlus/>
    }
    ,
    {
        title: "Report",
        path: "report",
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: "Report 1",
                path: "/overview/user",
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <IoIcons.IoIosPaper/> 
            },
        ]
    },
    {
        title: "Report",
        path: "report",
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: "Report 1",
                path: "/overview/user",
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <IoIcons.IoIosPaper/> 
            },
        ]
    },
    {
        title: "Report",
        path: "report",
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: "Report 1",
                path: "/overview/user",
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <IoIcons.IoIosPaper/> 
            },
        ]
    },
    {
        title: "Report",
        path: "report",
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: "Report 1",
                path: "/overview/user",
                icon: <IoIcons.IoIosPaper/> 
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <IoIcons.IoIosPaper/> 
            },
        ]
    },
    {
        title: "Product",
        path: "/title",
        icon: <FaIcons.FaCartPlus/>
    }
]