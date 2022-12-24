import inst from "./../../../assets/images/contact/socialIcon/inst.svg"
import vk from "./../../../assets/images/contact/socialIcon/vk.svg"
import facebook from "./../../../assets/images/contact/socialIcon/facebook.svg"
import SocialIcon from "../../../components/SocialIcon"
import social from "./social.module.css"

export default function Social() {
  return (
    <div className={social.inner}>
      <SocialIcon
        img={inst}
        style={{
          minWidth: "45px",
          maxWidth: "45px",
          minHeight: "45px",
          maxHeight: "45px",
        }}
        link={true}
      />
      <SocialIcon
        img={vk}
        style={{
          minWidth: "45px",
          maxWidth: "45px",
          minHeight: "45px",
          maxHeight: "45px",
        }}
        link={true}
      />
      <SocialIcon
        img={facebook}
        style={{
          minWidth: "45px",
          maxWidth: "45px",
          minHeight: "45px",
          maxHeight: "45px",
        }}
        link={true}
      />
    </div>
  )
}
