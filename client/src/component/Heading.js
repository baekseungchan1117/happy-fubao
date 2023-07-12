import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./Heading.css";
export default function Heading() {
  const location = useLocation();
  const navigate = useNavigate();
  let headerName;
  switch (location.pathname) {
    case "/":
      headerName = "Home";
      break;
    case "/shop":
      headerName = "Shop";
      break;
    case "/community":
      headerName = "Community";
      break;
    default:
      headerName = "Home";
  }
  const goToElement = (element) => {
    navigate("/", { state: { scrollTo: element } });
  };
  return (
    <div className="inner">
      <div className="header">
        <div className="header_Sub_Category">
          <img
            className="main-logo"
            src={process.env.PUBLIC_URL + "/goods_image/main-logo.png"}
          />
          <div
            className="header_name"
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
          >
            "{headerName}"
          </div>
          <RouterLink
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            to="/cart"
            // className="link"
          >
            Cart{" "}
          </RouterLink>
          <RouterLink
            to={"/signup"}
            style={{ color: "white", textDecoration: "none", marginLeft: "1%" }}
          >
            {" "}
            Join us{" "}
          </RouterLink>
          <RouterLink
            to={"/login"}
            style={{ color: "white", textDecoration: "none", marginLeft: "1%" }}
          >
            Log in
          </RouterLink>
        </div>
        <div className="header_Sub">
          <button
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            onClick={() => goToElement("today_ranking")}
            className="link"
          >
            HOME
          </button>
          <button
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            onClick={() => goToElement("introduce")}
            className="link"
          >
            ABOUT
          </button>
          <button
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            onClick={() => goToElement("location_map")}
            className="link"
          >
            CONTACT
          </button>
          <RouterLink
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            to="/shop"
            className="link"
          >
            SHOP
          </RouterLink>
          <RouterLink
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            to="/community"
            className="link"
          >
            COMMUNITY
          </RouterLink>
        </div>
      </div>
    </div>
  );
}