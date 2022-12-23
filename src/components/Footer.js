import React from "react";
import SocialFollow from "./SocialFollow";

export const Footer = () => {
  return (
    <div>
      <div className="container mx-auto w-full max-w-screen-xl dark">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <SocialFollow/>
            <span
              
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></span>
            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <span class="text-muted"  >
                twiter
              </span>
            </li>
            <li className="ms-3">
              <span class="text-muted" >
                Facebook
              </span>
            </li>
            <li className="ms-3">
              <span class="text-muted" >
                Instagram
              </span>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};


export default Footer;
