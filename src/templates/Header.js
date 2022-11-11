import Navbar from "./navbar/Navbar";
import "./templateStyles.css";

const Header = () => {
  return (
    <div>
      <div className="container my-2">
        <div className="top">
          <div>
            {/* <img src="/static/images/app/mitLogo.png" alt="mit-logo" className="logo-img" /> */}
            <img
              src="/static/images/app/auLogo.png"
              alt="annauniv-logo"
              className="logo-img"
            />
          </div>
          <div className="ms-3 title">
            <span className="h1 text-center">
              Department of Applied Sciences &amp; Humanities
            </span>
            <span className="h5 text-center">MIT Campus, Anna University</span>
          </div>
          {/* <div>
            <img src="/static/images/app/auLogo.png" alt="annauniv-logo" className="logo-img" />
          </div> */}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
