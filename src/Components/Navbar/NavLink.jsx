import { NavLink } from "react-bootstrap";

export const AppNavLink = (children, to) => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <NavLink to={to} className="nav-link" onClick={() => handleClick}>
      {children}
    </NavLink>
  );
};
