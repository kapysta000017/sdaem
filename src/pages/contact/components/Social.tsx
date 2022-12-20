import inst from "./../../../assets/images/contact/socialIcon/inst.svg"
import vk from "./../../../assets/images/contact/socialIcon/vk.svg"
import facebook from "./../../../assets/images/contact/socialIcon/facebook.svg"
import SocialIcon from "./SocialIcon"
import social from "./social.module.css"

export default function Social() {
  return (
    <div className={social.inner}>
      <SocialIcon img={inst} width={45} />
      <SocialIcon img={vk} width={45} />
      <SocialIcon img={facebook} width={45} />
    </div>
  )
}
