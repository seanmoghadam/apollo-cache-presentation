import React from "react";
import { GetUsersComponent } from "@/graphql";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark box-shadow">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <strong>Apollo Cache Management Workshop</strong>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
