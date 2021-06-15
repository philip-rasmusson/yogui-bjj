import './SigninView.css'

export const SigninView = () => {
  return (
    <div className="sigin-view-wrapper">
      <form action="" className="signin-form">
        <h1 className="signin-title">Sign in</h1>
        <input type="text" className="signin-username" id="username" />
        <input type="password" className="signin-password" id="password" />
        <button type="submit" className="signin-button">Sign in</button>
        <span className="stay-logged-in">
          <input type="checkbox" className="signin-checkbox" id="stay-logged-in" />
          <p>Stay logged in</p>
        </span>
      </form>

    </div>
  )
}
