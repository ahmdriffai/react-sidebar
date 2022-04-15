import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 10%;
`;


function Admin() {
  return (
      <Sidebar />
  );
}

export default Admin;
