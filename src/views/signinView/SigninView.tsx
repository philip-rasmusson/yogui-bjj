import './SigninView.css'

export const SigninView = () => {
  return (
    <div>
      <form action="" className="signin-form">
        <h1 className="signin-title">Logga in</h1>
        <input type="text" className="signin-username" id="username" placeholder="Användarnamn" />
        <input type="password" className="signin-password" id="password" placeholder="Lösenord" />
        <button type="submit" className="signin-button">Logga in</button>
        <span className="stay-logged-in">
          <input type="checkbox" className="signin-checkbox" id="stay-logged-in" />
          <p>Fortsätt vara inloggad</p>
        </span>
      </form>

    </div>
  )
}
