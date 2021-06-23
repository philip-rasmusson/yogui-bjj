import './SigninView.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import TFAServerAPIServices from '../../shared/api/services/TFAServerAPIServices'
import Axios from 'axios'

export const SigninView = () => {

  const history = useHistory()
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [stayLoggedIn, setStayLoggedIn] = useState(false)
  const [user, setUser] = useState<any>()

  // Sign in user.
  const signInUser = async () => {
    const response = TFAServerAPIServices.getUser('60c5e68b0403001d54180d97')
    setUser(response)
  }

  const logUser = () => {
    console.log(user)
  }

  // Save new user data.
	const registerNewUser = () => {

		// TODO compare repeated passwrod

		const user = { 
			name: userName, 
			password: password,
		}
		
		// TODO save new user to db
    TFAServerAPIServices.createUser("karlkarlkarl", "123321")
	}

  const createUser = async () => {
    try {
      const newUser = { name: "kalr321", password: "321"}
      await Axios.post("http://localhost:3001/user", newUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className='signin-view-wrapper'>
{/* 
      <button onClick={() => signInUser()}>fetch user</button>
      <button onClick={() => logUser()}>log user</button>
      <button onClick={() => registerNewUser()}>register user</button>
      <button onClick={() => createUser()}>create user</button> */}

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
