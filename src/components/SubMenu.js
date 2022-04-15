import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarLink = styled(Link)`
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background-color: salmon;
        border-left: 4px solid red;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background-color: #eee;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
    transition: all 1s ease;

    &:hover{
        background-color: salmon;
        cursor: pointer;
    }

`

const SubMenu = ({item}) => {
    const [subNav, setSubNav] = useState(false)
    

    const showSubNav = () => setSubNav(!subNav);
    
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subNav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SidebarLink>
            {subNav && item.subNav.map((item, index) => {
                    return(
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })} 
        </>
    )
}

export default SubMenu