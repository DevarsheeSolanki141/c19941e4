import React from "react";
import DialpadRoundedIcon from "@material-ui/icons/DialpadRounded";
import CallIcon from "@material-ui/icons/Call";
import SettingsIcon from "@material-ui/icons/Settings";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <CallIcon />
      <DialpadRoundedIcon fontSize="large" style={{ color: "#52b202" }} />
      <SettingsIcon></SettingsIcon>
    </footer>
  );
};

export default Footer;
