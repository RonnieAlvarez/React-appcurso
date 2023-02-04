import React from "react";
import SocialFollow from "./SocialFollow";

export const Footer = () => {
  return (
    <div>
      <div className="px-0 mx-0 my-0 w-full max-w-screen-xl dark footer sticky-bottom">
        <footer className="d-flex flex-wrap justify-content-between  mx-0 py-0 my-0 botton fixed-bottom ">
          <div className="col-md-6 d-flex align-items-center">
            <SocialFollow />
          </div>
          <div className="col-md-4  text-muted pe-3  justify-content-center ">
            © 2022 Company, Inc
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
