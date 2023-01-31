/**
 * It's a function that returns a div with four links, each link has a FontAwesomeIcon inside of it.
 * @returns A React component.
 */
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons"


export default function SocialFollow() {
  return (
<div className="social-container">
      <a href="https://www.youtube.com/c/@tvracinternacional3928"
        className="youtube social ">
        <FontAwesomeIcon icon={faYoutube} size="2x" color="aliceblue"/>
      </a>
      <a href="https://www.facebook.com/tvrac.net/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" color="aliceblue"/>
      </a>
      <a href="https://www.twitter.com/@506rac" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" color="aliceblue"/>
      </a>
      <a href="https://www.instagram.com/tvracinternacional"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="aliceblue" />
      </a>

</div>
  )
}

