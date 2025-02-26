import React from "react";
import ios from "../assets/ios.png";
import android from "../assets/android.png";
import "bootstrap/dist/css/bootstrap.min.css";

const TopBar = () => {
  return (
    <div className="topbar py-2" style={{backgroundColor:'#57C675'}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start ms-md-4">
            <a href="https://play.google.com/store/apps/details?id=com.iw.precisegoal&hl=en" className="d-flex align-items-center text-decoration-none">
            <p
                className="mb-0 app-download me-2 hover-underline"
                style={{ color: "#000", fontWeight: "bold", cursor: "pointer" }}
              >
                Download Our App:
              </p>              <img src={ios} alt="iOS" className="img-fluid me-2" style={{ width: "28px" }} />
              <img src={android} alt="Android" className="img-fluid" style={{ width: "19px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
