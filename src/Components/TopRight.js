import AppsIcon from "@material-ui/icons/Apps";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import React from "react";
import "../StyledComponents/TopRight.css";

function TopRight() {
  return (
      <div className="rightcomp">
        <p>Gmail</p>
        <AccountCircleIcon />
        <AppsIcon />
        <LinkedInIcon />
      </div>
  );
}

export default TopRight;
