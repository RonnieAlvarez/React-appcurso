import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
<div class="social-container">
      <a href="https://www.youtube.com/c/@tvracinternacional3928"
        className="youtube social ">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/tvrac.net/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/@506rac" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/tvracinternacional"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

</div>
  );
}

