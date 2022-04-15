import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

const Nav = styled.div`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid #eee;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background-color: white;
  width: 350px;
  height: 100%;
  overflow-y: scroll;
  /* display: flex; */
  justify-content: center;
  position: relative;
  top: 0;
  display: ${({ sidebar }) => (sidebar ? "flex" : "none")};
  transition: 525ms;
  z-index: 10;

  @media screen and (max-width: 600px) {
      position: absolute;
      top: 80px;
  }

`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const WrapperContent = styled.div`
    display: flex;
    height: 100vh;
`;

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-height: 100vh;
    overflow-y: scroll;
    background-color: #eee;
    padding: 20px;
    &::-webkit-scrollbar {
        width: 10px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
    background: orange; /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
    background-color: blue; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid orange; /* creates padding around scroll thumb */
    }
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h3>SPMI FKSP</h3>
        </Nav>
        <WrapperContent>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
            <Container>
                <Outlet/>
            </Container>
        </WrapperContent>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
