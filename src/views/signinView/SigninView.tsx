import './SigninView.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SigninView = () => {

  const history = useHistory()
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [stayLoggedIn, setStayLoggedIn] = useState(false)

  // Sign in user
  const signInUser = () => {
    // TODO
  }

  // Save new user data.
	const registerNewUser = () => {

		// TODO compare repeated passwrod

		const user = { 
			name: userName, 
			password: password,
		}
		
		// TODO save new user to db
	}

  return (


    <div className='signin-view-wrapper'>

      {/* Sign in user */}
      <div className="signin-container">
        <form className="signin-form" onSubmit={() => signInUser()}>

          <h1 className="signin-title">Logga in</h1>

          <input 
            className="signin-username" 
            type="text" 
            placeholder="Användarnamn" 
            onChange={(event) => setUserName(event.target.value.toLocaleLowerCase())}
          />

          <input 
            className="signin-password" 
            type="password" 
            placeholder="Lösenord" 
            onChange={(event) => setPassword(event.target.value)} 
          />

          <input
            className='signin-submit submit'
            type='submit'
            value='Logga in'
          />

          <span className="stay-logged-in">
            <input 
              type="checkbox" 
              onChange={() => setStayLoggedIn(!stayLoggedIn)}
            />
            <p className='stay-logged-in'>Fortsätt vara inloggad</p>
          </span>

        </form>
      </div>

      <hr />

      {/* Register new user */}
      <div className='register-container'>
        <form className='register-form' onSubmit={() => registerNewUser()}>

          <h1 className='register-title'>Ny användare</h1>
          
          <input 
            className='user-name'
            type='text'
            placeholder='Användarnamn'
            onChange={(event) => setUserName(event.target.value.toLocaleLowerCase())} 
          />

          <input 
            className='user-password'
            type='password'
            placeholder='Lösenord'
            onChange={(event) => setPassword(event.target.value)}
          />

          <input 
            className='user-password-repeat'
            type='password'
            placeholder='Upprepa lösenord'
            onChange={(event) => setRepeatPassword(event.target.value)}
          />

          <input
            className='register-submit submit'
            type='submit'
            value='Registera'
          />

          <span className='register-stay-logged-in'>
            <input
              type='checkbox'
              onChange={() => setStayLoggedIn(!stayLoggedIn)}
            />
            <p className='stay-logged-in'>Fortsätt vara inloggad</p>
          </span>

        </form>
		  </div>
    
    </div>
  )
}
