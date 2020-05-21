import React from "react";
import Linedkin from "../images/linkedin.svg";
import Facebook from "../images/facebook.svg";
import GitHub from "../images/github.svg"


const SocialMedia = () => {
  return (
    <section>
      {/*Linkedin*/}
      <a href="https://www.linkedin.com/in/matthew-hoare-frontdev/" target="__target">
        <Linedkin/>
      </a>
      {/*Github*/}
      <a href="https://github.com/mattiehoare123" target="__target">
        <GitHub/>
      </a>
      {/*Facebook*/}
      <a href="https://www.facebook.com/mattie.hoare.98/" target="__target">
        <Facebook/>
      </a>
    </section>
  )
}
export default SocialMedia
