import { ReactComponent as User } from "../assets/images/contact/form/user.svg"
import { ReactComponent as Password } from "../assets/images/contact/form/password.svg"
import { ReactComponent as Mail } from "../assets/images/contact/form/mail.svg"

export const componentLoginIcon = (classname: string) => (
  <User className={classname} style={{ top: "-1px" }} />
)
export const componentUserIcon = (classname: string) => (
  <User className={classname} style={{ top: "1px" }} />
)
export const componentPasswordIcon = (classname: string) => (
  <Password className={classname} style={{ top: "1px" }} />
)
export const componentMailIcon = (classname: string) => (
  <Mail className={classname} style={{ top: "1px" }} />
)
export const componentMailIconRegistration = (classname: string) => (
  <Mail className={classname} style={{ top: "4px" }} />
)
