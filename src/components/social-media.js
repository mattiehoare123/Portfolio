import React from "react";
import Linedkin from "../images/linkedin.svg";
import Facebook from "../images/facebook.svg";
import GitHub from "../images/github.svg"


const SocialMedia = () => {
  return (
    <aside>
      <a href="https://www.facebook.com/mattie.hoare.98/" target="__target">
        <Facebook/>
      </a>
      <a href="https://github.com/mattiehoare123" target="__target">
        <GitHub/>
      </a>
      <a href="https://www.linkedin.com/in/matthew-hoare-frontdev/" target="__target">
        <Linedkin/>
      </a>
    </aside>
  )
}
export default SocialMedia
