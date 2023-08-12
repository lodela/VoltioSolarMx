import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <>
      <section>
        <div id="clouds">
          <div className="ufo">
            <img
              src="assets/images/404/ufo_2.svg"
              alt="Axen.com"
              title="AXEN.com | Digital Transformation: SharePoint, Office365, Azure"
            />
          </div>
          <div className="cloud x1"></div>
          <div className="cloud x1_5"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>
        <div className="c">
          <div className="_404">404</div>
          <hr />
          <div className="_1">THE PAGE</div>
          <div className="_2">WAS NOT FOUND</div>
          <NavLink
            to="/"
            className="btn btn-secondary btn-lg"
            variant="secondary"
            size="lg"
          >
            {" "}
            Regresar
          </NavLink>
        </div>
      </section>
    </>
  );
};
export default NotFound;
