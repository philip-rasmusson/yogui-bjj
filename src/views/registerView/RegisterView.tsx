import './RegisterView.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const RegisterView = () => {

	const history = useHistory()
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [stayLoggedIn, setStayLoggedIn] = useState(false)

	// Save new user data.
	const registerNewUser = () => {

		// TODO compare repeated passwrod

		const user = { 
			name: userName, 
			password: password,
		}
		
		// TODO save new user to db
		// POST localhost:3001/user { name: userName, password: password }
	}

	return (
		<div className='register-container'>

			<h1 className='register'>Register new user</h1>
			
			<div>
				<form className='register' onSubmit={() => registerNewUser()}>
					
					<input 
						className='user-name register-input'
						placeholder='user name'
						onChange={(event) => setUserName(event.target.value.toLocaleLowerCase())}>
						</input>
						<br />

					<input 
						className='user-password register-input'
						placeholder='password'
						onChange={(event) => setPassword(event.target.value.toLocaleLowerCase())}>
						</input>
					<br />

					<input 
						className='user-password-repeat register-input'
						placeholder='repeat password'
						onChange={(event) => setRepeatPassword(event.target.value.toLocaleLowerCase())}>
						</input>
					<br />

					<input 
						className='register-submit register-input'
						type='submit'
						value='Register'
						/>

					<input
						className='stay-logged-in-checkbox'
						type='checkbox'
						onChange={() => setStayLoggedIn(!stayLoggedIn)}
						/>
					<span className='stay-logged-in-text'>Stay logged in</span>
				</form>
			</div>
		</div>
	)
}
