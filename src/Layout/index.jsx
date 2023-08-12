import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import { VoltioNavbar } from "../Components/Navbar/Navbar";

export const LayoutPublic = () => {
  const [isUser, setUser] = useState("Norberto Lodela");
  return (
    <div>
      <VoltioNavbar user={isUser} />
      <Container>
        <Outlet />
      </Container>
      <footer></footer>
    </div>
  );
};
