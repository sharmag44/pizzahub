import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red, blue } from "@mui/material/colors";
const Footer = () => {
  return (
    <div className="Footer d-flex flex-row justify-content-center align-items-center gap-3">
      <FacebookIcon fontSize="large" sx={{ color: blue[900] }} />
      <TwitterIcon fontSize="large" color="primary" />
      <YouTubeIcon fontSize="large" sx={{ color: red[500] }} />
    </div>
  );
};

export default Footer;
