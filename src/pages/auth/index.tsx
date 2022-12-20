import auth from "./index.module.css"

export default function Auth() {
  return (
    <div className={auth.inner}>
      <div className={auth.container}>
        <h4 className={auth.title}>Авторизация</h4>
        <div className={auth.text}>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </div>
        {/* <input type="text" className={auth.name} /> */}
        {/* <input type="password" className={auth.password} /> */}
        <div>
          <label className={auth.switch}>
            <input className={auth.checkbox} type="checkbox" />
            <span className={auth.slider}></span>
          </label>
        </div>
      </div>
    </div>
  )
}
